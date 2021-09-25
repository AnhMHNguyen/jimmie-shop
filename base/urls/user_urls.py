from django.urls import path 
from base.views import user_views as views 


urlpatterns = [
    path('signin/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/update/', views.updateUserProfile, name="user-profile-update"),
    path('profile/', views.getUserProfile, name="user-profile"),
    path('register/', views.registerUser, name="user-register"),
    path('', views.getUsers, name="users"),
    path('<str:pk>/', views.getUserById, name='user'),
    path('delete/<str:pk>/', views.deleteUser, name='delete-user'),
    path('update/<str:pk>/', views.updateUserAdmin, name='update-user'),
    
]