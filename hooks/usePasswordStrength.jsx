import { useEffect, useState } from 'react';

const usePasswordStrength = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState('');
  const [criteria, setCriteria] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSymbol: false,
    isLongEnough: false,
  });

  useEffect(() => {
    checkPasswordStrength();
  }, [password]);

  const checkPasswordStrength = () => {
    let score = 0;

    // Check for at least one uppercase letter
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;

    // Update criteria state
    setCriteria({
      hasUppercase,
      hasLowercase,
      hasNumber,
      hasSymbol,
      isLongEnough,
    });

    // Calculate score based on criteria
    if (hasUppercase) score += 1;
    if (hasLowercase) score += 1;
    if (hasNumber) score += 1;
    if (hasSymbol) score += 1;
    if (isLongEnough) score += 1;

    setStrength(score);

    // Determine password level based on strength score
    if (score === 5) {
      setLevel('Strong');
    } else if (score === 4) {
      setLevel('Medium');
    } else if (score === 3) {
      setLevel('Weak');
    } else {
      setLevel('Very Weak');
    }
  };

  return [password, setPassword, strength, level, criteria, checkPasswordStrength];
};

export default usePasswordStrength;