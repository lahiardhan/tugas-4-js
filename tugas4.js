const ahmad = 170;
const andi = 175;
const abdul = 171;

if (ahmad > andi) {
   if (ahmad > abdul) {
      console.log("Tertinggi : ahmad");
      if (andi > abdul) {
         console.log("Urutan : 1.ahmad, 2.andi, 3.abdul")
      }
      else {
         console.log("Urutan : 1.ahmad, 2.abdul, 3.andi")
      }
   } else {
      console.log("tertinggi : abdul");
      console.log("Urutan : 1.abdul, 2.ahmad, 3.andi")
   }
} else {
   if (andi > abdul) {
      console.log("tertinggi : andi");
      if (ahmad > abdul) {
         console.log("Urutan : 1.andi, 2.ahmad, 3.abdul")
      } else {
         console.log("Urutan : 1.andi, 2.abdul, 3.ahmad")
      }
   } else {
      console.log("tertinggi : abdul");
      console.log("Urutan : 1.abdul, 2.andi, 3.ahmad")
   }
}