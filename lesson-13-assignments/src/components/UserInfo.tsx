//Assignment 1
interface UserInfoProps {
    name: string,
    age: number,
    email: string
}

const UserInfo: React.FC<UserInfoProps> = (props) => {
    return (
        <ul>
            <li>Name: {props.name}</li>
            <li>Age: {props.age}</li>
            <li>Email: {props.email}</li>
        </ul>
    )
}

export default UserInfo