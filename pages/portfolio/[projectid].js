import { useRouter } from "next/router";

function PortfolioProjectPage(props) {
    const router = useRouter();

    console.log(router.query.projectid);
    return (
        <div>
            <h1>The Portfolio Project Page</h1>
        </div>
    );
}

export default PortfolioProjectPage;
