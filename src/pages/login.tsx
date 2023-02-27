import { NextPage } from 'next';
import { CirclesWrapper } from '../shared';
import { PageWrapper } from '../shared';

const Login: NextPage = () => {
    return (
        <PageWrapper nopadding>
            <CirclesWrapper>Log in</CirclesWrapper>
        </PageWrapper>
    );
};

export default Login;
