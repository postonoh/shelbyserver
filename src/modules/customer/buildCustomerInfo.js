export const buildCustomerInfo = (info, providerName) => {
    let user = {
        email: '',
        firstName: '',
        lastName: '',
        avatarUrl: '',
        provider: {
            uid: '',
            type: ''
        }
    }


    if (providerName == 'GOOGLE') {
        user.provider.uid = info.id;
        user.provider.type = provider;
        user.firstName = info.given_name;
        user.lastName = infor.family_name;
        user.email = info.email;
        user.avatarUrl = info.picture;
    } else if (providerName == 'FACEBOOK') {
        const [firstName, ...lastnName] = info.name.split(' ');
        user.firstName = firstName;
        user.lastName = lastnName.join(' ');
        user.provider.uid = info.id;
         user.avatarUrl = info.picture.data.url;
         user.email = info.email;
         user.provider.type = provider;
    }

    return user;

}