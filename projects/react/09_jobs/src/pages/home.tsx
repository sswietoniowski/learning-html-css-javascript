import { Button } from '@/components/button/button';
import { InputField } from '@/components/form/input-field';
import { Link } from '@/components/link/link';

const LandingPage = () => {
  return (
    <>
      <Button variant="solid" type="button">
        Click Me
      </Button>
      <br />
      <InputField label="Name" />
      <br />
      <Link href="/">Home</Link>
    </>
  );
};

export default LandingPage;