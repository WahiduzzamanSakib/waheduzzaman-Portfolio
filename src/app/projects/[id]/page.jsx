import ViewDetails from "./ViewDetails";

const ViewDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/projects.json`,
        {
            cache: "no-store",
        }
    );
    const projects = await res.json();
    const project = projects.find(
        (item) => item.id === Number(id)
    );
    return (
        <ViewDetails project={project} />
    );
};


export default ViewDetailsPage;