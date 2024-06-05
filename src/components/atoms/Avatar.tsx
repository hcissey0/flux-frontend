import { Link } from "react-router-dom";
import { UserInterface } from "../../interfaces/user.interfaces";

interface Props {
  user: UserInterface | null | undefined
  src?: string;
  alt?: string;
  w?: string;
  size?: string;
  status?: string;
  link?: boolean
}

const Avatar = ({
  user = null,
  status = '',
  w = '10',
  size = 'xl',
  link = true,
}: Props) => {

  if (!link) {
    return (
      <div className={`avatar placeholder ${status && status}`}>
        <div className={`bg-neutral text-neutral-content rounded-full w-${w ? w : '10'}`}>
          <span className={`text-${size ? size : 'xl'}`}>
            {
              user ?
              user.firstName.charAt(0) + user.lastName.charAt(0)
              :
              '$'
            }
          </span>
          {/* <img src={src} alt={alt}/> */}
        </div>
      </div>
    )
  }

  return (
    <Link to={`/users/${user && user.username}`}>
      <div className={`avatar placeholder ${status && status}`}>
        <div className={`bg-neutral text-neutral-content rounded-full w-${w}`}>
          <span className={`text-${size}`}>
            {
              user ?
              user.firstName.charAt(0) + user.lastName.charAt(0)
              :
              '$'
            }
          </span>
          {/* <img src={src} alt={alt}/> */}
        </div>
      </div>
    </Link>
  )
}

export default Avatar

