# Generated by Django 3.2.6 on 2021-09-29 09:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0012_auto_20210924_1602'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='image',
            field=models.ImageField(blank=True, default='/jimmieshop/placeholder_hg0tpq', null=True, upload_to='jimmieshop/'),
        ),
    ]
