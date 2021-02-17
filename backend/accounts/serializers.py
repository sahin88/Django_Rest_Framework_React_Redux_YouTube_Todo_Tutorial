from rest_framework import serializers
from django.contrib.auth import authenticate, password_validation
from django.core import exceptions
from django.contrib.auth import get_user_model

Account = get_user_model()


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        username = data.get('username', '')
        password = data.get('password', '')
        if username and password:

            user = authenticate(username=username, password=password)

            if user.is_active:
                data['user'] = user
            else:
                err_message = ' user is not active, please contact to the admin!'
                raise exceptions(err_message)

        else:
            err_message = 'Please check your sign in values,  password or email is not correct!'
            raise exceptions(err_message)
        return data


class registrationSerializer(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.EmailField(required=True)
    password = serializers.CharField(
        write_only=True, style={'input_type': 'password'})

    def validate_password(self, value):
        password_validation.validate_password(value, self.instance)
        return value

    def create(self, validated_data):
        user = Account(
            username=validated_data['username'], email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        return user
