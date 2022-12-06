from rest_framework import serializers
from .models import (
    Category,
    Quiz,
    Question,
    Option
)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'id',
            'name',
            'quiz_count'
        )


class QuizSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()

    class Meta:
        model = Quiz
        fields = (
            'id',
            'title',
            'category',
            'question_count'
        )


class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = (
            'id',
            'option_text',
            'is_right'
        )


class QuestionSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True)
    quiz = serializers.StringRelatedField()

    class Meta:
        model = Question
        fields = (
            'id',
            'quiz',
            'title',
            'options',
            'difficulty'
        )


# title = models.TextField()
#     quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
#     difficulty = models.CharField(max_length=1, choices=SCALE)
