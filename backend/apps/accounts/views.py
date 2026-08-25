from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class AdminLoginSerializer(TokenObtainPairSerializer):
    """
    Login serializer for the admin panel.
    Only staff users (is_staff=True) may obtain a token - this keeps
    the admin panel restricted to actual admin accounts, not any
    future public user accounts if those get added later.
    """

    def validate(self, attrs):
        data = super().validate(attrs)
        if not self.user.is_staff:
            from rest_framework_simplejwt.exceptions import AuthenticationFailed
            raise AuthenticationFailed("This account is not authorised for admin access.")
        data["email"] = self.user.email
        data["name"] = self.user.get_full_name() or self.user.username
        return data


class AdminLoginView(TokenObtainPairView):
    serializer_class = AdminLoginSerializer
