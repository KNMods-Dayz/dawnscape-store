const PRODUCTS = {
    /* =========================
     * CREDIT PACKS
     * ========================= */
    70000: {
        name: "250 Credits",
        price: 250,
        category: "credits",
        description: "Adds 250 DawnScape credits to your account.",
        image: "assets/icons/credits.png"
    },
    70001: {
        name: "750 Credits",
        price: 750,
        category: "credits",
        description: "Adds 750 DawnScape credits to your account.",
        image: "assets/icons/credits.png"
    },
    70002: {
        name: "1,800 Credits",
        price: 1800,
        category: "credits",
        description: "Adds 1,800 DawnScape credits to your account.",
        image: "assets/icons/credits.png"
    },
    70003: {
        name: "3,750 Credits",
        price: 3750,
        category: "credits",
        description: "Adds 3,750 DawnScape credits to your account.",
        image: "assets/icons/credits.png"
    },
    70004: {
        name: "8,000 Credits",
        price: 8000,
        category: "credits",
        description: "Adds 8,000 DawnScape credits to your account.",
        image: "assets/icons/credits.png"
    },
    70005: {
        name: "20,000 Credits",
        price: 20000,
        category: "credits",
        description: "Adds 20,000 DawnScape credits to your account.",
        image: "assets/icons/credits.png"
    },
    70006: {
        name: "50,000 Credits",
        price: 50000,
        category: "credits",
        description: "Adds 50,000 DawnScape credits to your account.",
        image: "assets/icons/credits.png"
    },
    70007: {
        name: "250,000 Credits",
        price: 250000,
        category: "credits",
        description: "Adds 250,000 DawnScape credits to your account.",
        image: "assets/icons/credits.png"
    },
    70008: {
        name: "500,000 Credits",
        price: 500000,
        category: "credits",
        description: "Adds 500,000 DawnScape credits to your account.",
        image: "assets/icons/credits.png"
    },
    70009: {
        name: "1,000,000 Credits",
        price: 1000000,
        category: "credits",
        description: "Adds 1,000,000 DawnScape credits to your account.",
        image: "assets/icons/credits.png"
    },

    /* =========================
     * MYSTERY BOXES
     * ========================= */
    70010: {
        name: "Common Mystery Box",
        price: 500,
        category: "mystery",
        description: "A basic mystery box containing low to mid-tier rewards.",
        image: "assets/boxes/common.png"
    },
    70011: {
        name: "Rare Mystery Box",
        price: 1200,
        category: "mystery",
        description: "A mystery box with a higher chance at rare items.",
        image: "assets/boxes/rare.png"
    },
    70012: {
        name: "Ultra Mystery Box",
        price: 2500,
        category: "mystery",
        description: "High-end box with a strong chance at ultra-rare loot.",
        image: "assets/boxes/ultra.png"
    },
    70013: {
        name: "Slayer Mystery Box",
        price: 1800,
        category: "mystery",
        description: "Contains slayer-related rewards such as points, items, and consumables.",
        image: "assets/boxes/slayer.png"
    },
    70014: {
        name: "Skiller Mystery Box",
        price: 1500,
        category: "mystery",
        description: "Contains skilling supplies and boosts for non-combat skills.",
        image: "assets/boxes/skiller.png"
    },
    70015: {
        name: "Boss Drop Mystery Box",
        price: 3000,
        category: "mystery",
        description: "Chance at boss-style drops and high-tier PVM items.",
        image: "assets/boxes/boss.png"
    },
    70016: {
        name: "Cosmetic Mystery Box",
        price: 1200,
        category: "mystery",
        description: "Random cosmetic overrides and fashion items.",
        image: "assets/boxes/cosmetic.png"
    },
    70017: {
        name: "Pet Mystery Box",
        price: 2000,
        category: "mystery",
        description: "Contains a chance at various pets and pet-related rewards.",
        image: "assets/boxes/pet.png"
    },
    70018: {
        name: "Seasonal Mystery Box",
        price: 1800,
        category: "mystery",
        description: "Limited-time seasonal rewards themed around current events.",
        image: "assets/boxes/seasonal.png"
    },
    70019: {
        name: "DawnScape Mega Box",
        price: 5000,
        category: "mystery",
        description: "Top-tier box with the best possible loot table.",
        image: "assets/boxes/mega.png"
    },

    /* =========================
     * ITEM BUNDLES
     * ========================= */
    70020: {
        name: "Starter PVM Bundle",
        price: 1200,
        category: "bundles",
        description: "Food, potions, and basic gear to kickstart your PVM journey.",
        image: "assets/bundles/starter_pvm.png"
    },
    70021: {
        name: "Elite PVM Bundle",
        price: 3000,
        category: "bundles",
        description: "High-tier potions, supplies, and keys for serious PVMers.",
        image: "assets/bundles/elite_pvm.png"
    },
    70022: {
        name: "Slayer Bundle",
        price: 2000,
        category: "bundles",
        description: "Slayer VIP tickets, points, and skip scrolls.",
        image: "assets/bundles/slayer.png"
    },
    70023: {
        name: "Skiller Bundle",
        price: 1500,
        category: "bundles",
        description: "Logs, ores, herbs, seeds, and other skilling supplies.",
        image: "assets/bundles/skiller.png"
    },
    70024: {
        name: "Potion Bundle",
        price: 800,
        category: "bundles",
        description: "A stack of useful potions for combat and skilling.",
        image: "assets/bundles/potions.png"
    },
    70025: {
        name: "Food Bundle",
        price: 600,
        category: "bundles",
        description: "High-healing food to keep you alive in tough fights.",
        image: "assets/bundles/food.png"
    },
    70026: {
        name: "Key Bundle",
        price: 1800,
        category: "bundles",
        description: "Contains multiple keys for various chests and loot sources.",
        image: "assets/bundles/keys.png"
    },
    70027: {
        name: "Clue Scroll Bundle",
        price: 1200,
        category: "bundles",
        description: "A selection of clue scrolls for treasure hunters.",
        image: "assets/bundles/clues.png"
    },
    70028: {
        name: "Boss Teleport Bundle",
        price: 1500,
        category: "bundles",
        description: "Teleport items or unlocks for various boss locations.",
        image: "assets/bundles/boss_teleports.png"
    },
    70029: {
        name: "Cosmetic Bundle",
        price: 2000,
        category: "bundles",
        description: "A mix of cosmetic overrides and fashion items.",
        image: "assets/bundles/cosmetic.png"
    },

    /* =========================
     * COSMETIC PACKS
     * ========================= */
    70030: {
        name: "FashionScape Pack",
        price: 1500,
        category: "cosmetics",
        description: "A curated set of fashion items for style-focused players.",
        image: "assets/cosmetics/fashionscape.png"
    },
    70031: {
        name: "Override Pack",
        price: 1800,
        category: "cosmetics",
        description: "Weapon and armour overrides to customise your look.",
        image: "assets/cosmetics/overrides.png"
    },
    70032: {
        name: "Aura Cosmetic Pack",
        price: 2000,
        category: "cosmetics",
        description: "Cosmetic auras to enhance your character’s presence.",
        image: "assets/cosmetics/aura.png"
    },
    70033: {
        name: "Weapon Override Pack",
        price: 1600,
        category: "cosmetics",
        description: "A selection of weapon overrides.",
        image: "assets/cosmetics/weapon.png"
    },
    70034: {
        name: "Outfit Bundle",
        price: 2200,
        category: "cosmetics",
        description: "Full outfits and themed sets for your character.",
        image: "assets/cosmetics/outfit.png"
    },

    /* =========================
     * PET PACKS
     * ========================= */
    70035: {
        name: "Common Pet Pack",
        price: 1200,
        category: "pets",
        description: "Contains a chance at common pets.",
        image: "assets/pets/common.png"
    },
    70036: {
        name: "Rare Pet Pack",
        price: 2000,
        category: "pets",
        description: "Higher chance at rare and unique pets.",
        image: "assets/pets/rare.png"
    },
    70037: {
        name: "Legendary Pet Pack",
        price: 3500,
        category: "pets",
        description: "Best chance at legendary and boss-style pets.",
        image: "assets/pets/legendary.png"
    },
    70038: {
        name: "Boss Pet Pack",
        price: 3000,
        category: "pets",
        description: "Focused on boss-related pets and companions.",
        image: "assets/pets/boss.png"
    },
    70039: {
        name: "Seasonal Pet Pack",
        price: 1800,
        category: "pets",
        description: "Limited-time seasonal pets and themed companions.",
        image: "assets/pets/seasonal.png"
    },

    /* =========================
     * UTILITY PACKS
     * ========================= */
    70040: {
        name: "Teleport Pack",
        price: 800,
        category: "utility",
        description: "Teleport items or unlocks for faster travel.",
        image: "assets/utility/teleports.png"
    },
    70041: {
        name: "Instance Token Pack",
        price: 1500,
        category: "utility",
        description: "Tokens or charges for instanced bossing.",
        image: "assets/utility/instances.png"
    },
    70042: {
        name: "Slayer Skip Pack",
        price: 1200,
        category: "utility",
        description: "Scrolls or tokens to skip unwanted slayer tasks.",
        image: "assets/utility/slayer_skip.png"
    },
    70043: {
        name: "XP Boost Pack",
        price: 1000,
        category: "utility",
        description: "Experience-boosting items for faster progression.",
        image: "assets/utility/xp_boost.png"
    },
    70044: {
        name: "Loot Key Pack",
        price: 1400,
        category: "utility",
        description: "Keys or items that improve loot collection.",
        image: "assets/utility/loot_keys.png"
    },

    /* =========================
     * SEASONAL PACKS
     * ========================= */
    70045: {
        name: "Halloween Pack",
        price: 1800,
        category: "seasonal",
        description: "Spooky cosmetics, items, and themed rewards.",
        image: "assets/seasonal/halloween.png"
    },
    70046: {
        name: "Christmas Pack",
        price: 2000,
        category: "seasonal",
        description: "Festive cosmetics, items, and themed rewards.",
        image: "assets/seasonal/christmas.png"
    },
    70047: {
        name: "Easter Pack",
        price: 1600,
        category: "seasonal",
        description: "Easter-themed cosmetics and fun items.",
        image: "assets/seasonal/easter.png"
    },
    70048: {
        name: "Summer Pack",
        price: 1600,
        category: "seasonal",
        description: "Summer-themed cosmetics and rewards.",
        image: "assets/seasonal/summer.png"
    },
    70049: {
        name: "Winter Pack",
        price: 1600,
        category: "seasonal",
        description: "Winter-themed cosmetics and rewards.",
        image: "assets/seasonal/winter.png"
    },

    /* =========================
     * RANK UPGRADES
     * ========================= */
    70050: {
        name: "Mythic Donator",
        price: 25000,
        category: "ranks",
        description: "Unlocks the Mythic Donator rank and its associated benefits.",
        image: "assets/ranks/mythic.png"
    },
    70051: {
        name: "Supreme Donator",
        price: 50000,
        category: "ranks",
        description: "Unlocks the Supreme Donator rank and its associated benefits.",
        image: "assets/ranks/supreme.png"
    },
    70052: {
        name: "Godlike Donator",
        price: 99900,
        category: "ranks",
        description: "Unlocks the Godlike Donator rank and its associated benefits.",
        image: "assets/ranks/godlike.png"
    },
    70053: {
        name: "Eternal Donator",
        price: 150000,
        category: "ranks",
        description: "Unlocks the Eternal Donator rank and its associated benefits.",
        image: "assets/ranks/eternal.png"
    },
    70054: {
        name: "Founder Rank",
        price: 200000,
        category: "ranks",
        description: "Exclusive Founder rank for top supporters of DawnScape.",
        image: "assets/ranks/founder.png"
    },

    /* =========================
     * PERK MEGA-PACKS
     * ========================= */
    70060: {
        name: "Combat Perk Pack",
        price: 8700,
        category: "perks",
        description: "Unlocks multiple combat-related perks (familiarExpert, chargeBefriender, prayerBetrayer, avasSecret, dragonTrainer, gwdSpecialist, dungeon, perslaysion).",
        image: "assets/perks/combat.png"
    },
    70061: {
        name: "Skiller Perk Pack",
        price: 7500,
        category: "perks",
        description: "Unlocks a wide range of skilling perks (greenThumb, unbreakableForge, sleightOfHand, herbivore, masterFisherman, delicateCraftsman, masterChef, masterDiviner, quarryMaster, masterFledger, thePiromaniac, huntsman, divineDoubler, imbuedFocus, alchemicSmith).",
        image: "assets/perks/skiller.png"
    },
    70062: {
        name: "Utility Perk Pack",
        price: 5000,
        category: "perks",
        description: "Unlocks utility perks (bankCommand, staminaBoost, overclocked, elfFiend, miniGamer, portsMaster, investigator).",
        image: "assets/perks/utility.png"
    },
    70063: {
        name: "Bossing Perk Pack",
        price: 6000,
        category: "perks",
        description: "Focused on perks that benefit bossing and high-end PVM.",
        image: "assets/perks/bossing.png"
    },
    70064: {
        name: "Complete Perk Pack",
        price: 20000,
        category: "perks",
        description: "Unlocks all available perks in one purchase.",
        image: "assets/perks/complete.png"
    }
};
