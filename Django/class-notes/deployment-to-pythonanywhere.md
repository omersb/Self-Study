# PythonAnyWhere.com

(bash) shell commands for setup:

    git clone https://github.com/githubUserName/projectName.git
    cd projectName
    python -m venv env
    source env/bin/activate
    pip install --upgrade pip
    pip install -r requirements.txt
    echo SECRET_KEY=write_random_chars_to_here > .env
    python manage.py migrate
    $ python manage.py createsuperuser # optional

shell command for learn to current path:

    pwd

pythonanywhere/Web

    -> "Add New Web App" with ManualConfigration with Python_LastVersion
    -> Set "Source Code" with "Main Path" (example: /home/anyWhereUserName/ProjectName)
    -> Set "Working Directory" with "Main Path" (example: /home/anyWhereUserName/ProjectName)
    -> Set "VirtualEnv" with "Env Path" (example: /home/anyWhereUserName/ProjectName/env)

pythonanywhere/Web -> WSGI Configuration File (pythonanywhere_com_wsgi.py)

    # +++++++++++ DJANGO +++++++++++
    import os
    import sys

    # Set: Project Main Path:
    path = '/home/anyWhereUserName/ProjectName'

    if path not in sys.path:
        sys.path.append(path)

    # Set: Where is settings.py:
    os.environ['DJANGO_SETTINGS_MODULE'] = 'projectFolderName.settings'

    from django.core.wsgi import get_wsgi_application
    application = get_wsgi_application()

finished :)

    dont forget: click to 'Reload' button before publish.

    if error, checking:

        settting.py:
            
            ALLOWED_HOSTS = ['*']
            
            # folder -> static-files-path:
            STATIC_URL = 'static/'
            # root -> static-files-path:
            STATIC_ROOT = BASE_DIR / STATIC_URL

        urls.py:

            from django.conf import settings
            from django.conf.urls.static import static
            # url -> static-files-path:
            urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

