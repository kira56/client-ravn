import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Cookies from "js-cookie"

const withAuthAdmin = (WrappedComponent) => {
    // eslint-disable-next-line react/display-name
    return (props) => {

        const router = useRouter();
        const [verified, setVerified] = useState(false);
        const { isAuthenticated, user } = useSelector(state => state.auth)

        useEffect(() => {

            if (!isAuthenticated) {
                router.replace("/signin");
            } else {
                if (user?.role.id === 1) {
                    setVerified(true);
                } else {
                    Cookies.remove("token");
                    router.replace("/signin");
                }
            }
        }, [isAuthenticated, router, user?.role.id]);

        if (verified) {
            return <WrappedComponent {...props} />;
        } else {
            return null;
        }
    };
};

export default withAuthAdmin;