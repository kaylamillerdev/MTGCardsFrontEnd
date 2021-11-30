import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';
import { FormControl, NgForm, FormBuilder, Validators, FormGroup} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    username: "kaylamillerdev",
    email: "kayla@kaylamiller.dev",
    firstName: "Kayla",
    lastName: "Miller",
    cardsOwned: [
      {
        id: 1,
        name: 'Chaos Warp',
        type: 'Instant',
        'color(s)': ["Red"],
        CMC: 3,
        power: 0,
        toughness: 0,
        rarity: "Mythic",
        setName: "Strixhaven: Mystical Archives",
        printing: "Normal",
        description: "The owner of target permanent shuffles it into their library, then reveals the top card of their library. If it's a permanent card, they put it onto the battlefield.",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/235309.jpg'
      },
      {
        id: 2,
        name: "Feral Krushok",
        type: "Creature",
        'color(s)': ["Green"],
        CMC: 5,
        power: 5,
        toughness: 4,
        rarity: "Common",
        setName: "Fate Reforged",
        printing: "Normal",
        description: "",
        numOwned: 0,
        image: 'https://tcgplayer-cdn.tcgplayer.com/product/95424_200w.jpg'
      },
      {
        id: 3,
        name: "Guardians of Meletis",
        type: "Artifact Creature",
        'color(s)': ["Colorless"],
        CMC: 3,
        power: 0,
        toughness: 6,
        rarity: "Common",
        setName: "Theros",
        printing: "Normal",
        description: "Defender (This creature can't attack.)",
        numOwned: 0,
        image: 'https://tcgplayer-cdn.tcgplayer.com/product/71409_200w.jpg'
      },
      {
        id: 4,
        name: "Guided Passage",
        type: "Sorcery",
        'color(s)': ["Blue", "Red", "Green"],
        CMC: 3,
        power: 0,
        toughness: 0,
        rarity: "Rare",
        setName: "Apocalypse",
        printing: "Normal",
        description: "Reveal the cards in your library. An opponent chooses from among them a creature card, a land card, and a noncreature, nonland card. You put the chosen cards into your hand. Then shuffle your library.",
        numOwned: 0,
        image: 'https://tcgplayer-cdn.tcgplayer.com/product/7965_200w.jpg'
      },
      {
        id: 5,
        name: "Graypelt Refuge",
        type: "Land",
        'color(s)': ["Colorless"],
        CMC: 0,
        power: 0,
        toughness: 0,
        rarity: "Uncommon",
        setName: "Commander 2017",
        printing: "Normal",
        description: "Graypelt Refuge enters the battlefield tapped. When Graypelt Refuge enters the battlefield, you gain 1 life. Tap: Add 1 green mana or 1 white mana to your mana pool.",
        numOwned: 0,
        image: 'https://tcgplayer-cdn.tcgplayer.com/product/196653_200w.jpg'
      },
      {
        id: 6,
        name: "Dragon's Rage Channeler",
        type: "Creature",
        'color(s)': ["Red"],
        CMC: 1,
        power: 1,
        toughness: 1,
        rarity: "Uncommon",
        setName: "Modern Horizons 2",
        printing: "Normal",
        description: "Whenever you cast a noncreature spell, surveil. (Look at the top card of your library. You may put that card into your graveyard.) Delirium - AS long as there are four or more card types among cards in your graveyard, Dragon's Rage Channeler gets +2/+2, has flying, and attacks each combat if able.",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/240055.jpg'
      },
      {
        id: 7,
        name: "Fallen Angel",
        type: "Creature",
        'color(s)': ["Black"],
        CMC: 5,
        power: 3,
        toughness: 3,
        rarity: "Uncommon",
        setName: "Fifth Edition",
        printing: "Normal",
        description: "Flying. Sacrifice a creature: Fallen Angel gets +2/+1 until end of turn.",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/2140.jpg'
      },
      {
        id: 8,
        name: "Duelist's Heritage",
        type: "Enchantment",
        'color(s)': ["White"],
        CMC: 3,
        power: 0,
        toughness: 0,
        rarity: "Rare",
        setName: "Commander 2016",
        printing: "Normal",
        description: "Whenever one or more creatures attack, you may have target attacking creature gain double strike until end of turn.",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/124461.jpg'
      },
      {
        id: 9,
        name: "Sidewinder Sliver",
        type: "Creature",
        'color(s)': ["White"],
        CMC: 1,
        power: 1,
        toughness: 1,
        rarity: "Common",
        setName: "Time Spiral",
        printing: "Normal",
        description: "All Slivers have flanking. (Whenever a creature without flanking blocks a Sliver, the blocking creature gets -1/-1 until end of turn.)",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/14357.jpg'
      },
      {
        id: 10,
        name: "Infiltrator il-Kor",
        type: "Creature",
        'color(s)': ["Blue", "White"],
        CMC: 5,
        power: 3,
        toughness: 1,
        rarity: "Common",
        setName: "Future Sight",
        printing: "Normal",
        description: "Shadow (This creature can block or be blocked by only creatures with shadow.) Suspend 2 - (Rather than cast this card from your hand, you may pay 1 colorless + 1 blue and exile it with two time counters on it. At the  beginning of your upkeep, remove a time counter. When the last is removed, cast it without paying its mana cost. It has haste.)",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/14911.jpg'
      },
      {
        id: 11,
        name: "Merciless Eviction",
        type: "Sorcery",
        'color(s)': ["White", "Black"],
        CMC: 6,
        power: 0,
        toughness: 0,
        rarity: "Rare",
        setName: "Gatecrash",
        printing: "Normal",
        description: "Choose one - Exile all artifacts. Exile all creatures. Exile all enchantments. Exile all planeswalkers.",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/67445.jpg'
      },
      {
        id: 12,
        name: "Serendib Efreet",
        type: "Creature",
        'color(s)': ["Blue"],
        CMC: 3,
        power: 3,
        toughness: 4,
        rarity: "Mythic",
        setName: "From the Vault: Exiled",
        printing: "Normal",
        description: "Flying. At the beginning of your upkeep, Serendib Efreet deals 1 damage to you.",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/32784.jpg'
      },
      {
        id: 13,
        name: "Cultivate",
        type: "Sorcery",
        'color(s)': ["Green"],
        CMC: 3,
        power: 0,
        toughness: 0,
        rarity: "Uncommon",
        setName: "Strixhaven: Mystical Archives",
        printing: "Normal",
        description: "Search your library for up to two basic land cards, reveal those cards, put one onto the battlefield tapped and the other into your hand, then shuffle.",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/235273.jpg'
      },
      //Need to check these still
      {
        id: 14,
        name: "Sworn Defender",
        type: "Creature",
        'color(s)': ["White"],
        CMC: 4,
        power: 1 ,
        toughness: 3,
        rarity: "Rare",
        setName: "Alliances",
        printing: "Normal",
        description: "1: Change Sworn Defender's power to the toughness of target creature blocking or being blocked by Sworn Defender, minus 1, until end of turn. Change Sworn Defender's toughness to 1 plus the power of that creature, until end of turn.",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/4263.jpg'
      },
      {
        id: 15,
        name: "Volcanic Submersion",
        type: "Sorcery",
        'color(s)': ["Red"],
        CMC: 5,
        power: 0,
        toughness: 0,
        rarity: "Common",
        setName: "Shards of Alara",
        printing: "Normal",
        description: "Destroy target artifact or land. Cycling 2 (2, Discard this card: Draw a card.)",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/27842.jpg'
      },
      {
        id: 16,
        name: "Kargan Dragonrider",
        type: "Creature",
        'color(s)': ["Red"],
        CMC: 2,
        power: 2,
        toughness: 2,
        rarity: "Common",
        setName: "Core Set 2019",
        printing: "Normal",
        description: "As long as you control a Dragon, Kargan Dragonrider has flying. (It can't be blocked except by creatures with flying or reach.)",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/168635.jpg'
      },
      {
        id: 17,
        name: "River Bear",
        type: "Creature",
        'color(s)': ["Green"],
        CMC: 4,
        power: 3,
        toughness: 3,
        rarity: "Uncommon",
        setName: "Portal Second Age",
        printing: "Normal",
        description: "Islandwalk (If defending player has any islands in play, River Bear can't be blocked.)",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/208.jpg'
      },
      // Adding more from strixhaven mystical set
      {
        id: 18,
        name: "Divine Gambit",
        type: "Sorcery",
        'color(s)': ["White"],
        CMC: 2,
        power: 0,
        toughness: 0,
        rarity: "Uncommon",
        setName: "Strixhaven: Mystical Archives",
        printing: "Normal",
        description: "Exile target artifact, creature, or enchantment an opponent controls. That player may put a permanent card from their hand onto the battlefield.",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/235498.jpg'
      },
      {
        id: 19,
        name: "Negate",
        type: "Instant",
        'color(s)': ["Blue"],
        CMC: 2,
        power: 0,
        toughness: 0,
        rarity: "Uncommon",
        setName: "Strixhaven: Mystical Archives",
        printing: "Normal",
        description: "Counter target noncreature spell.",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/235301.jpg'
      },
      {
        id: 20,
        name: "Ephemerate",
        type: "Instant",
        'color(s)': ["White"],
        CMC: 1,
        power: 0,
        toughness: 0,
        rarity: "Rare",
        setName: "Strixhaven: Mystical Archives",
        printing: "Normal",
        description: "Exile target creature you control, then return it to the battlefield under its owner’s control. Rebound (If you cast this spell from your hand, exile it as it resolves. At the beginning of your next upkeep, you may cast this card from exile without paying its mana cost.)",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/235370.jpg'
      },
      {
        id: 21,
        name: "Village Rites",
        type: "Instant",
        'color(s)': ["Black"],
        CMC: 1,
        power: 0,
        toughness: 0,
        rarity: "Uncommon",
        setName: "Strixhaven: Mystical Archives",
        printing: "Normal",
        description: "As an additional cost to cast this spell, sacrifice a creature. Draw two cards.",
        numOwned: 0,
        image: 'https://product-images.tcgplayer.com/fit-in/400x558/235322.jpg'
      }
    ]
}

numOwned = "";
id="";

userModel: User;
  constructor(

  ) {}

  ngOnInit() {

    }

  updateNum(updateForm: NgForm){
    console.log(updateForm.value);
    //this.userModel.cardsOwned[].numOwned = this.user.cardsOwned.
    }
}
