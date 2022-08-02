from django.urls import path

from .views import (
    user_favorites, 
    users,
    get_specific_user,
    user_token,
    get_current_user,
)


urlpatterns = [
    # path("<str:username>/favorites/", user_favorites, name="user_favorites"),
    path("favorites/", user_favorites, name="user_favorites"),
    path("favorites/<str:business_id>/", user_favorites, name="user_delete_favorite"),
    path("signup/", users, name="user_signup"),
    path("<int:pk>/", get_specific_user, name="get_user"),
    path("me/token/", user_token, name="user_token"),
    path("mine/", get_current_user, name="get_current_user"),
]
