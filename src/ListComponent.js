//ListComponent.js
const ListComponent = (props) => {
    return (
        <ul>
            {
                // props.list.map((item, index) => <li key={index}>{item}</li>)//not recommened to use key in li
                props.list.map((item, index) => <ListItem key={index} item={item} />)//key to use in custom component
            }
        </ul>
    )
}

const ListItem = ({ item }) => (
    <li>{item}</li>
);

export default ListComponent;
