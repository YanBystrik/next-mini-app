import Link from 'next/link';

import s from '../styles/A.module.css';

export const A = ({ text, href }) => {
  return (
    <Link href={href} className={s.link}>
      <p>{text}</p>
    </Link>
  );
};
