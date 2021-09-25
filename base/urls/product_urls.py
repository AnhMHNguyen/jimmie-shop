from django.urls import path 
from base.views import product_views as views


urlpatterns = [
    path('', views.getProducts, name="products"),
    path('<str:category>', views.getProducts, name="products"),
    path('create/', views.createProduct, name='create-product'),
    path('upload/', views.uploadImage, name='upload-image'),
    path('category/', views.getCategory, name='categories'),
    path('<str:pk>/reviews/', views.createProductReview, name="create-review"),
    path('product/<str:pk>/', views.getProduct, name="product"),
    path('delete/<str:pk>/', views.deleteProduct, name='delete-product'),
    path('update/<str:pk>/', views.updateProduct, name='update-product'),
]