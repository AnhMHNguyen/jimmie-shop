# Generated by Django 3.2.6 on 2021-09-24 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0009_alter_category_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='image',
            field=models.ImageField(blank=True, default='https://res.cloudinary.com/ds4m4cban/image/upload/v1632523906/images/jimmieshop/placeholder_hg0tpq.png', null=True, upload_to='jimmieshop/'),
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='https://res.cloudinary.com/ds4m4cban/image/upload/v1632523906/images/jimmieshop/placeholder_hg0tpq.png', null=True, upload_to='jimmieshop/'),
        ),
    ]
