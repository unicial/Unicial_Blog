import Layout from '../../components/Layout/Layout';
import ProjectUpdates from '../../components/Layout/ProjectUpdates'

export default function Index() {
    return (
        <>
            <Layout title="Unicial-Blog"
                description="This is a Unicila Blog page">
                <ProjectUpdates />
            </Layout>
        </>
    )
}