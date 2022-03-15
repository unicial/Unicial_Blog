import AuthorDetail from "../../components/Layout/AuthorDetail/AuthorDetail"
import Header from "../../components/Header/Header";
import TopTab from "../../components/TopTab/TopTab";
import Footer from "../../components/Footer/Footer";


export default function Author() {
    return (
        <>
            <Header />
            <TopTab />
            <AuthorDetail />
            <Footer />
        </>
    )
}