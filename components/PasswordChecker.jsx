export default function PasswordChecker({
  password,
  strength,
  level,
  criteria,
}) {
  return (
    <ul className="space-y-2 text-center">
      <li style={{ color: criteria.hasNumber ? "green" : "red" }}>
        {criteria.hasNumber ? "✔️" : "❌"} At least one number
      </li>
      <li style={{ color: criteria.isLongEnough ? "green" : "red" }}>
        {criteria.isLongEnough ? "✔️" : "❌"} At least 8 characters long
      </li>
      <li style={{ color: criteria.hasSymbol ? "green" : "red" }}>
        {criteria.hasSymbol ? "✔️" : "❌"} At least one special character
      </li>
      <li style={{ color: criteria.hasUppercase ? "green" : "red" }}>
        {criteria.hasUppercase ? "✔️" : "❌"} At least one uppercase letter
      </li>
      <li style={{ color: criteria.hasLowercase ? "green" : "red" }}>
        {criteria.hasLowercase ? "✔️" : "❌"} At least one lowercase letter
      </li>
    </ul>
  );
}
