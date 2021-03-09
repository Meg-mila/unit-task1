export default function getUser(user) {
  if (user.health > 50) {
    return 'healthy';
  } if (user.health < 50 && user.health > 15) {
    return 'wounded';
  }
  return 'critical';
}
