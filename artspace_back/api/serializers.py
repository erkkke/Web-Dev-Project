from rest_framework import serializers

from api.models import MyUser
from django.contrib.auth.models import User

class UserSerializer(serializers.HyperlinkedModelSerializer):
    banner = serializers.URLField(source="userprofile.banner")
    photo = serializers.URLField(source="userprofile.photo")
    desc = serializers.CharField(source="userprofile.desc")

    class Meta:
        model = User
        fields = ['id', 'username', 'banner', 'photo', 'email', 'desc']

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.save()

        if MyUser.objects.get(id = instance.id):
            profile = MyUser.objects.get(id = instance.id)
            profile_data = validated_data.get('userprofile')

            profile.banner = profile_data.get('banner', profile.banner)
            profile.photo = profile_data.get('photo', profile.photo)
            profile.desc = profile_data.get('desc', profile.desc)
            profile.save()
        else: 
            MyUser.objects.create(user=instance)

        return instance
