import saladimg from "../images/salad.jpeg";
import avocadoimg from "../images/avocado_toast.webp";
import beetrootimg from "../images/beetroot_idli.webp";
import paneerimg from "../images/paneer_pancake.webp";
import barleyimg from "../images/barley_soup.webp";
import noodleimg from "../images/noodle_soup.webp";
import mushimg from "../images/stuffed_mushrooms.webp";
import samakimg from "../images/samak_ki_khichdi.webp";
import proteinimg from "../images/protein_balls.webp";
import potatoimg from "../images/potato_egg_salad.webp";
import chilligimg from "../images/chilli_garlic_omelette.webp";

export function getData() {
  return [
    { title: "Salad", price: 179, Image: saladimg,id:1 },
    { title: "Avocado Toast", price: 150, Image: avocadoimg,id:2 },
    { title: "Beetroot Idli", price: 350, Image: beetrootimg ,id:3},
    { title: "Paneer Pancake", price: 139, Image: paneerimg,id:4 },
    { title: "Barley Soup", price: 255, Image: barleyimg,id:5 },
    { title: "Noodle Soup", price: 199, Image: noodleimg,id:6 },
    { title: "Stuffed Mushrooms", price: 399, Image: mushimg,id:7 },
    { title: "Samak Khichdi", price: 189, Image: samakimg,id:8 },
    { title: "Chilli Garlic Omelette", price: 321, Image: chilligimg,id:9 },
    { title: "Protein Balls", price: 90, Image: proteinimg,id:10 },
    { title: "Potato Egg Salad", price: 459, Image: potatoimg,id:11 },
  ];
}
