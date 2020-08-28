# Generated by Django 3.0.8 on 2020-07-20 11:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Core',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('member_image', models.ImageField(upload_to='profile_images_core')),
                ('name', models.CharField(max_length=100)),
                ('position', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('member_image', models.ImageField(upload_to='profile_images_faculty')),
                ('name', models.CharField(max_length=100)),
                ('position', models.CharField(max_length=100)),
                ('department', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name_plural': 'Faculties',
            },
        ),
        migrations.CreateModel(
            name='Startup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('logo', models.ImageField(upload_to='startup_logos')),
                ('intro', models.CharField(max_length=100)),
                ('link', models.FileField(upload_to='startup_docs')),
            ],
        ),
    ]