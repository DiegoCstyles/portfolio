import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import Icon from '../Icon';

const ContactIcons = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <div>
      {isMobile && (
        <div className="flex"> 
          <Icon href='https://www.linkedin.com/in/diegoerc/' target='_blank' label='Linkedin' classNameLink='group' icon={FaGithub}></Icon>
          <Icon href='https://github.com/DiegoCstyles' target='_blank' label='Github' classNameIcon='ml-2' classNameLink='group' icon={FaLinkedin}></Icon>
        </div>
      )}
      {!isMobile && (
        <div className="ml-1">
          <Icon href='https://github.com/DiegoCstyles' target='_blank' label='Github' classNameIcon='mt-6' classNameLink='group' icon={FaGithub}></Icon>
          <Icon href='https://www.linkedin.com/in/diegoerc/' target='_blank' label='Linkedin' classNameIcon='mt-2' classNameLink='group' icon={FaLinkedin}></Icon>
        </div>  
      )}
    </div>
  )
}

export default ContactIcons
