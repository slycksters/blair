import {
  bansheeIcon,
  bansheeScream,
  demonIcon,
  faejkurFakeFootsteps,
  faejkurIcon,
  faejkurSoundMimic,
  harrowIcon,
  jiangshiIcon,
  krasueIcon,
  lamentIcon,
  mareIcon,
  nookIcon,
  oniIcon,
  phantomIcon,
  poltergeistIcon,
  revenantIcon,
  shadeIcon,
  spiritIcon,
  strigoiIcon,
  vuultIcon,
  vuultSpammingBreakLights,
  wraithIcon,
  yamaIcon,
  yureiIcon,
  zozoIcon,
} from '../assets';

export const GhostTypes = [
  {
    id: 1,
    name: 'Banshee',
    slug: 'banshee',
    image: bansheeIcon,
    behaviour:
      'A Banshee focuses on one specific target and will hunt them until that player is eliminated. If the target is not inside the investigation site, the Banshee will behave like other ghosts and chase any player within line of sight. However, if the original target returns to the site, the Banshee will immediately switch back to them. When the target is present, non-target players are ignored and will not be attacked even if they cross the Banshee’s path.',
    evidences: [
      {
        id: 1,
        text: 'EMF Level 5',
      },
      {
        id: 2,
        text: 'Freezing Temperature',
      },
      {
        id: 3,
        text: 'SLS Anomaly',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'Using a Parabolic Microphone gives a chance to capture a Banshee’s scream.',
        media: bansheeScream,
        mediaType: 'audio',
      },
      {
        id: 2,
        text: 'When testing for a Banshee, make sure all players are inside the investigation site, as having the target outside can affect the results.',
      },
      {
        id: 3,
        text: 'The Banshee has the highest chance of triggering the cry event.',
      },
      {
        id: 4,
        text: 'During a hunt, using the Music Box will usually lure the ghost toward it. However, if the player holding the Music Box is not the Banshee’s target and the target is inside the investigation site, the Banshee will ignore the Music Box and continue chasing its target.',
      },
    ],
  },
  {
    id: 2,
    name: 'Demon',
    slug: 'demon',
    image: demonIcon,
    behaviour:
      'The Demon is a highly aggressive ghost that actively seeks to kill players. It can start hunting at up to 90% sanity and does so more frequently than most ghosts. It is strongly affected by crucifixes, which are very effective at preventing its hunts.\nThere is a rare chance (1/30) that a Demon will roar and ignore a crucifix when it is used to stop a hunt.\nEach time a Demon completes a hunt, its hunting speed increases, along with its salt stepping speed. It is also generally more active, leading to more interactions and ghost events.',
    evidences: [
      {
        id: 1,
        text: 'Freezing Temperature',
      },
      {
        id: 2,
        text: 'Ghost Writing',
      },
      {
        id: 3,
        text: 'Spirit Box',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'Demons physically manifest and hunt more frequently than any other ghost type.',
      },
      {
        id: 2,
        text: 'Demons have a crucifix range that extends 40 extra studs compared to other ghosts. Using a crucifix will also prevent additional hunts for 80 seconds, which is twice as long as the normal 40-second duration. This does not work during the No Crucifixes Challenge.',
      },
      {
        id: 3,
        text: 'Demons allow players to relight the Summoning Circle one minute earlier (2:00) compared to other ghosts (3:00).',
      },
      {
        id: 4,
        text: 'Demons have a much shorter hunt cooldown than other ghosts. They can begin hunting again after only 10 seconds, while other ghosts require at least a 30-second cooldown.',
      },
    ],
  },
  {
    id: 3,
    name: 'Faejkur',
    slug: 'faejkur',
    image: faejkurIcon,
    behaviour:
      'The Faejkur is a ghost type known for its strong ability to mimic sounds around it. When it copies a sound, it usually plays it in a lower pitch than the original, making it easier to tell the difference between the real sound and the imitation.\nIt is not perfectly accurate, but it can reproduce most sounds from nearby actions and tools, as long as it remembers them. A Faejkur’s memory lasts about two minutes, and after that time, it will forget the sound it heard.\nThese fake sounds can be hard to detect because they are made within a very small area. Players may need to carefully check different corners of the room to catch it in the act.',
    evidences: [
      {
        id: 1,
        text: 'EMF Level 5',
      },
      {
        id: 2,
        text: 'Freezing Temperature',
      },
      {
        id: 3,
        text: 'Ghost Writing',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'The Faejkur can mimic many sounds, such as the SLS Camera, EMF Reader, window tapping, Trail Camera, and more.',
        media: faejkurSoundMimic,
        mediaType: 'video',
      },
      {
        id: 2,
        text: 'The Faejkur can also create fake footsteps coming from the opposite direction of its actual position.',
        media: faejkurFakeFootsteps,
        mediaType: 'video',
      },
    ],
  },
  {
    id: 4,
    name: 'Harrow',
    slug: 'harrow',
    image: harrowIcon,
  },
  {
    id: 5,
    name: 'Jiangshi',
    slug: 'jiangshi',
    image: jiangshiIcon,
  },
  {
    id: 6,
    name: 'Krasue',
    slug: 'krasue',
    image: krasueIcon,
  },
  {
    id: 7,
    name: 'Lament',
    slug: 'lament',
    image: lamentIcon,
  },
  {
    id: 8,
    name: 'Mare',
    slug: 'mare',
    image: mareIcon,
  },
  {
    id: 9,
    name: 'Nook',
    slug: 'nook',
    image: nookIcon,
  },
  {
    id: 10,
    name: 'Oni',
    slug: 'oni',
    image: oniIcon,
  },
  {
    id: 11,
    name: 'Phantom',
    slug: 'phantom',
    image: phantomIcon,
  },
  {
    id: 12,
    name: 'Poltergeist',
    slug: 'poltergeist',
    image: poltergeistIcon,
  },
  {
    id: 13,
    name: 'Revenant',
    slug: 'revenant',
    image: revenantIcon,
  },
  {
    id: 14,
    name: 'Shade',
    slug: 'shade',
    image: shadeIcon,
  },
  {
    id: 15,
    name: 'Spirit',
    slug: 'spirit',
    image: spiritIcon,
  },
  {
    id: 16,
    name: 'Strigoi',
    slug: 'strigoi',
    image: strigoiIcon,
  },
  {
    id: 17,
    name: 'Vuult',
    slug: 'vuult',
    image: vuultIcon,
    behaviour:
      'The Vuult is a ghost that thrives in environments filled with electricity, and its overall activity heavily depends on the amount of “vuultage” charge it has accumulated. At the start of an investigation, Vuults tend to appear inactive and can only hunt at extremely low sanity levels due to the lack of electrical charge throughout the haunted location.\nThis ghost type is commonly seen interacting with nearby lights and frequently tampering with the breaker to manipulate its charge levels, attempting to reach a more favorable amount of “vuultage.” Once it reaches a comfortable middle ground, the Vuult will actively try to maintain and balance the electrical charge within the site.',
    evidences: [
      {
        id: 1,
        text: 'EMF Level 5',
      },
      {
        id: 2,
        text: 'Ghost Orbs',
      },
      {
        id: 3,
        text: 'SLS Anomaly',
      },
    ],
    tips: [
      {
        id: 1,
        text: `The following factors increase the Vuult's charge: nearby players, electronic devices, an active breaker, and Thunderstorm weather.`,
      },
      {
        id: 2,
        text: `A fully charged Vuult is capable of destroying an EMF Reader.`,
        media: 'https://www.youtube.com/embed/1L9AMHkHGuA',
        mediaType: 'youtube',
      },
      {
        id: 3,
        text: `A highly charged Vuult can easily be mistaken for a Poltergeist due to its frequent interactions with the environment. However, Vuults primarily interact with objects that use electricity in order to manipulate their charge.`,
      },
      {
        id: 4,
        text: 'A highly charged Vuult may repeatedly break nearby lights.',
        media: vuultSpammingBreakLights,
        mediaType: 'video',
      },
    ],
  },
  {
    id: 18,
    name: 'Wraith',
    slug: 'wraith',
    image: wraithIcon,
  },
  {
    id: 19,
    name: 'Yama',
    slug: 'yama',
    image: yamaIcon,
  },
  {
    id: 20,
    name: 'Yurei',
    slug: 'yurei',
    image: yureiIcon,
  },
  {
    id: 21,
    name: 'Zozo',
    slug: 'zozo',
    image: zozoIcon,
  },
];
