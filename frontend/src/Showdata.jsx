export const Showdata = ({ data }) => {
    return (
        <>
            {console.log("Data: ", data)}

            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                );
            })}
        </>
    );
};