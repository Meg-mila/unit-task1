export function getUser(user) {

   if (user.health > 50) {
       return 'healthy';
   } else if (user.health < 50 && user.health > 15) {
       return 'wounded';
   } else {
       return 'critical';
   }
}
