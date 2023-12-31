"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */
// Middleware: permissions

module.exports = {

    isLogin: (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.errorStatusCode = 403;
            throw new Error('NoPermission: You must login.');
        }
    }, isAdmin: (req, res, next) => {
        if (req.user && req.user.isAdmin) {
            next();
        } else {
            res.errorStatusCode = 403;
            throw new Error('NoPermission: You must be admin.');
        }
    }, isAdminOrLead: (req, res, next) => {
        const departmentId = req.params?.departmentId || null;

        if (req.user && (req.user.isAdmin || req.user.isLead && req.user.departmentId === departmentId)) {
            next();
        } else {
            res.errorStatusCode = 403;
            throw new Error('NoPermission: You must be admin or lead of this department.');
        }
    }, iaAdminOrOwner: (req, res, next) => {
        const userId = req.params?.userId || null;

        if (req.user && (req.user.isAdmin || req.user._id === userId)) {
            next();
        } else {
            res.errorStatusCode = 403;
            throw new Error('NoPermission: You must be admin or owner of this user.');
        }
    },
}
