# Generated by Django 3.2.6 on 2021-09-13 05:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_remove_shippingaddress_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='title',
            field=models.TextField(blank=True, null=True),
        ),
    ]
