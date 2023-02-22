import { NextPage } from 'next';
import { CirclesWrapper } from '../src/shared';
import { PageWrapper } from '../src/shared';

const Login: NextPage = () => {
    return (
        <PageWrapper nopadding>
            <CirclesWrapper>Log in</CirclesWrapper>
        </PageWrapper>
    );
};

export default Login;
