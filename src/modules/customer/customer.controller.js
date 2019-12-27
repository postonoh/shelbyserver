import * as Yup from 'yup';

import { PROVIDER_ENUM } from './customer.model';
import { AuthProvider } from '../../services/authProvider';
import { buildCustomerInfo } from './buildCustomerInfo';


export const create = async (req, res) => {

    const { token, provider } = req.body;

    const bodySchema = Yup.object().shape({
        token: Yup.string().required(),
        provider: Yup.string()
            .oneOf(PROVIDER_ENUM)
            .required(),
    });


    try {
        await bodySchema.validate({ token, provider });
      
        if (provider == 'FACEBOOK') {       
            const data = await AuthProvider.Facebook.authAsync(token);
            const customer = buildCustomerInfo(data, provider);
            console.log(data);
            res.status(201).json(customer);
        } else if (provider == 'GOOGLE') {
            const data = await AuthProvider.Google.authAsync(token);
            customer = buildCustomerInfo(data, provider);
            res.status(201).json(customer);
        } else {
            res.sendStatus(400);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

