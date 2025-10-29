import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.replace('/docs/basics');
  }, [history]);

  return null; // nothing to render since we redirect
}
