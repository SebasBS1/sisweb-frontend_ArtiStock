import "../style_ap.css";

interface Props {};

const ErrorPage = (_props: Props) => {
    return (
        <div className="container-fluid">
            <div className="col">
                <div className="row pt-5 text-white text-center">
                    <h1 className="py-5 mt-5 title">404 Page not found</h1>
                </div>
            </div>
        </div>
    )
};

export default ErrorPage;