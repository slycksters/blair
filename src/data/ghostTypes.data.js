import {
  bansheeIcon,
  bansheeScream,
  demonIcon,
  faejkurFakeFootsteps,
  faejkurIcon,
  faejkurSoundMimic,
  hallucinationEvent,
  harrowIcon,
  jiangshiHop,
  jiangshiIcon,
  krasueIcon,
  lamentIcon,
  mareIcon,
  mareStartingHunt,
  nookIcon,
  oniIcon,
  phantomCameraStun,
  phantomIcon,
  phantomThroughCameras,
  poltergeistBlink,
  poltergeistFlingItems,
  poltergeistIcon,
  poltergeistInteractions,
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
    behaviour:
      'Known for its highly protective behavior, the Harrow becomes more aggressive depending on how many players are near its room. Because it is very territorial, its activity increases each time a player enters its room, which can lead to more frequent hunts. You may also notice more ghost interactions and events when staying close.\nDuring a hunt, the Harrow’s speed changes based on its distance from its favorite room. It moves faster when it is closer to its ghost room, but slows down when it goes farther away. The Harrow cannot roam to other rooms, making it unique among ghosts. It is also so stubborn that the Chariot Tarot Card is guaranteed to work on it.',
    evidences: [
      {
        id: 1,
        text: 'Ghost Writing',
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
        text: 'If the ghost is very fast at the start of a hunt, try luring it away from its room to check if it is a Harrow.',
      },
      {
        id: 2,
        text: "Place salt in the ghost's favorite room. If the salt stepping sound is fast, it could be a Harrow. It also will not step on salt outside its room.",
      },
      {
        id: 3,
        text: 'Harrows do not roam and are very territorial, so the Chariot Tarot Card will never work on them.',
      },
    ],
  },
  {
    id: 5,
    name: 'Jiangshi',
    slug: 'jiangshi',
    image: jiangshiIcon,
    behaviour:
      'Hailing from Chinese folklore, the Jiangshi is a reanimated corpse often described as a “hopping” vampire-like spirit. It is typically portrayed as stiff and rigid, forcing it to move by jumping with its arms extended, rather than walking normally. According to legend, Jiangshi are created when a body fails to properly rest, becoming reanimated due to unresolved energy or spiritual imbalance.',
    evidences: [
      {
        id: 1,
        text: 'Freezing Temeperature',
      },
      {
        id: 2,
        text: 'Ultraviolet',
      },
      {
        id: 3,
        text: 'SLS Anomaly',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'Jiangshi are semi-tricky ghosts known for their repetitive behavior. They can trigger the same interaction or event up to three times in a row, often making their actions feel predictable but intense.',
      },
      {
        id: 2,
        text: 'During a hunt, Jiangshi are known to have a slight chance to “hop” where they skip a footstep',
        media: jiangshiHop,
        mediaType: 'video',
      },
      {
        id: 3,
        text: 'Jiangshi are known to occasionally skip letters when using the Spirit Board, causing incomplete or inconsistent messages.',
      },
      {
        id: 4,
        text: 'Jiangshi have a rare chance to skip a step when walking through salt, always skipping the second footprint in the sequence.',
      },
    ],
  },
  {
    id: 6,
    name: 'Krasue',
    slug: 'krasue',
    image: krasueIcon,
    behaviour:
      'The Krasue is a tricky ghost that is hard to predict. It can start hunts from unexpected locations, so players should stay alert at all times. It strongly dislikes fire, especially candles and lighters.\nThe Krasue has a 10% chance to change its appearance from its normal form into a floating head. Each lit candle within a 90-stud radius of the ghost room adds another 10% chance for this transformation.\nWhen in head form, the Krasue becomes slower near flames. Lit candles or lighters reduce its hunt speed by 1, with a minimum speed of 5. Flames can also weaken its ability to speed up when chasing a player, and multiple candles can completely stop this speed boost.',
    evidences: [
      {
        id: 1,
        text: 'Freezing Temperature',
      },
      {
        id: 2,
        text: 'EMF Level 5',
      },
      {
        id: 3,
        text: 'Ultraviolet',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'Light many candles near the ghost’s favorite room. If it is a Krasue, it will be forced into its head form and reveal itself.',
      },
      {
        id: 2,
        text: 'Use as many candles as possible to slow down the Krasue’s movement speed during hunts.',
      },
      {
        id: 3,
        text: 'Placing a crucifix in its room will prevent the Krasue from using its appearance change ability.',
      },
    ],
  },
  {
    id: 7,
    name: 'Lament',
    slug: 'lament',
    image: lamentIcon,
    behaviour:
      'The Lament is a deceptive ghost that tries to trick its victims and make them more vulnerable. It does not speed up even when it has line of sight (LoS) on a player, which can make its behavior harder to read during hunts.\nNear the end of a hunt, the Lament may stop electronic disruptions and become noticeably quieter. Its heartbeat and heavy footsteps disappear, replaced by soft, light steps that sound similar to a nearby player. These sounds are very quiet and can only be heard when close to the ghost. There is also a small chance it will not go quiet at all.\nIn rare cases, a Lament can fully drain a player’s stamina during a physical manifestation. While this is uncommon and not a reliable identification method, it is an ability unique to this ghost.',
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
        text: 'Spirit Box',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'The Lament can fake the end of a hunt by turning off all lights and becoming silent, making players think the hunt is over and catching them off guard. There is a low chance the lights will stay on during this ability.',
      },
      {
        id: 2,
        text: 'During the Lament’s ability, players can use flashlights and night vision without interference.',
      },
      {
        id: 3,
        text: 'The Lament has a consistently slow speed and will rarely catch a player who is already alerted.',
      },
      {
        id: 4,
        text: 'Van Princess players can identify a Lament by watching the van lights. If they stop flickering while the hunt seems to end, try opening the door. If it does not open, the Lament has faked the end of the hunt.',
      },
    ],
  },
  {
    id: 8,
    name: 'Mare',
    slug: 'mare',
    image: mareIcon,
    behaviour:
      'Mares are commonly known for becoming more active in the dark, making them more likely to start hunts when the area is unlit. In well-lit environments, they tend to become less active. This is due to their strong dislike of light, and they will often try to turn lights off whenever possible.\nMares also have a 5% chance to completely shatter a light when turning it off. This behavior is not exclusive to Mares, so it cannot be used as a guaranteed identification method.\nDepending on its behavior, a Mare may quickly turn off a light right after it has been turned on, as long as the breaker is active. However, this is rare and not a reliable way to confirm the ghost type.',
    evidences: [
      {
        id: 1,
        text: 'Freezing Temperature',
      },
      {
        id: 2,
        text: 'Spirit Box',
      },
      {
        id: 3,
        text: 'SLS Anomaly',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'Turning on the lights can make the Mare become quieter, and it is often mistaken for a Shade.',
      },
      {
        id: 2,
        text: 'The Mare often moves to another room if a player turns on the lights in its current room.',
      },
      {
        id: 3,
        text: 'The Mare will never start a hunt with a light on. When it hunts, it always turns off the light first before manifesting.',
        media: mareStartingHunt,
        mediaType: 'video',
      },
      {
        id: 4,
        text: 'The Mare will never turn on lights or activate the fuse.',
      },
      {
        id: 5,
        text: 'The Mare will never trigger the Hallucination Event.',
        media: hallucinationEvent,
        mediaType: 'video',
      },
    ],
  },
  {
    id: 9,
    name: 'Nook',
    slug: 'nook',
    image: nookIcon,
    behaviour:
      'The Nook is a ghost of an extremely greedy and materialistic soul. It is known for its obsessive behavior toward items, and it can often be identified by how strongly it is influenced by nearby objects.\nNooks are never satisfied with their current location if they sense another area contains more items. Because of this, they may change their ghost room to the one with the highest concentration of objects.\nNooks are also highly roamy, moving around more frequently than most other ghost types.',
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
        text: 'Ghost Orbs',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'Unlike other ghosts, Nooks can only roam to adjacent rooms. If a more distant room is more attractive, it will pass through multiple rooms to reach it.',
      },
      {
        id: 2,
        text: 'Nooks can make nearby objects and van equipment disappear. This is shown by a small puff of air when the ability triggers, though it is rarely seen.',
      },
      {
        id: 3,
        text: 'To identify a Nook, place multiple items in the ghost room and check if any go missing. You can also use salt; footprints appearing in the room can help confirm its presence.',
      },
    ],
  },
  {
    id: 10,
    name: 'Oni',
    slug: 'oni',
    image: oniIcon,
    behaviour:
      'The Oni is a ghost that is very dangerous at the start of an investigation, often being fast and aggressive early on. However, as players use more protective equipment, the Oni gradually becomes slower and less threatening over time.',
    evidences: [
      {
        id: 1,
        text: 'Ghost Writing',
      },
      {
        id: 2,
        text: 'Ultraviolet',
      },
      {
        id: 3,
        text: 'SLS Anomaly',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'Using items like the Incense Burner, Salt, and Crucifix can weaken the Oni, causing it to become slower over time.',
      },
      {
        id: 2,
        text: 'The Oni has fast salt stepping sounds at first, but these become slower as the ghost weakens.',
      },
      {
        id: 3,
        text: 'The Oni cannot perform the Sing Event.',
      },
    ],
  },
  {
    id: 11,
    name: 'Phantom',
    slug: 'phantom',
    image: phantomIcon,
    behaviour:
      'The Phantom is a reintroduced ghost type with a few notable traits. Its most distinctive feature is that when it is stunned, it becomes blind for 3 seconds.',
    evidences: [
      {
        id: 1,
        text: 'Ghost Orbs',
      },
      {
        id: 2,
        text: 'Ultraviolet',
      },
      {
        id: 3,
        text: 'SLS Anomaly',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'The Photo Camera works similarly to an Incense Burner when used against the Phantom.',
        media: phantomCameraStun,
        mediaType: 'video',
      },
      {
        id: 2,
        text: 'The Phantom is invisible when viewed through cameras.',
        media: phantomThroughCameras,
        mediaType: 'video',
      },
      {
        id: 3,
        text: 'During Manifestation, Sing, or Fake Hunt events, taking a photo of the Phantom will cause it to vanish or immediately end the event.',
      },
    ],
  },
  {
    id: 12,
    name: 'Poltergeist',
    slug: 'poltergeist',
    image: poltergeistIcon,
    behaviour:
      'Poltergeists are known for very high activity, but they do not necessarily hunt more often than other ghosts. They frequently interact with nearby objects in quick succession, making them one of the most consistently active ghost types. Because of this, sanity can drain quickly, often making it easier to reach 0 sanity compared to other ghosts.\nThey are also more likely to interact during hunts. While all ghosts can trigger interactions during hunts, Poltergeists are especially known for doing so, such as ringing phones or turning on TVs.\nIn rare cases, a Poltergeist can trigger a “poltsplosion,” where it suddenly bursts and scatters multiple nearby items across an area.',
    evidences: [
      {
        id: 1,
        text: 'Ultraviolet',
      },
      {
        id: 2,
        text: 'Ghost Orbs',
      },
      {
        id: 3,
        text: 'Spirit Box',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'The Poltergeist has the fastest blink among all ghosts.',
        media: poltergeistBlink,
        mediaType: 'video',
      },
      {
        id: 2,
        text: 'Poltergeists are the strongest when it comes to flinging items during hunts.',
        media: poltergeistFlingItems,
        mediaType: 'video',
      },
      {
        id: 3,
        text: 'Poltergeists are very active and frequently interact with their surroundings.',
        media: poltergeistInteractions,
        mediaType: 'video',
      },
      {
        id: 4,
        text: 'To test for a Poltergeist, gather multiple items in one pile. If they are suddenly thrown everywhere in a large burst, the ghost is likely a Poltergeist.',
      },
    ],
  },
  {
    id: 13,
    name: 'Revenant',
    slug: 'revenant',
    image: revenantIcon,
    behaviour: `The Revenant exhibits a dual nature in its behavior. When not in pursuit, it moves at an exceptionally slow pace. However, when a player is in its line of sight, it accelerates significantly, making it challenging to escape. The ghost's increased speed during hunts poses a serious threat, requiring caution when attempting to stun or loop it.`,
    evidences: [
      {
        id: 1,
        text: 'EMF Reader',
      },
      {
        id: 2,
        text: 'Ghost Writing',
      },
      {
        id: 3,
        text: 'Ultraviolet',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'If a fast-moving ghost is stunned with an Incense Burner and slows down to a normal slow speed, it may be a Revenant. Be careful not to confuse this with a Spirit, which becomes extremely slow when stunned.',
      },
      {
        id: 2,
        text: 'When a Revenant is chasing you, break its line of sight by hiding behind cars, corners, or walls to make it slower.',
      },
      {
        id: 3,
        text: 'Fast salt stepping sounds can indicate a possible Revenant.',
      },
      {
        id: 4,
        text: 'If you suspect a Revenant, stay hidden and let teammates monitor cameras and listen to footsteps. The Revenant moves much slower when it has no line of sight to players.',
      },
    ],
  },
  {
    id: 14,
    name: 'Shade',
    slug: 'shade',
    image: shadeIcon,
    behaviour:
      'The Shade is a reserved ghost type that is often less active than others, making it harder to detect and gather evidence. It can sometimes be mistaken for a Vuult with low vuultage due to its similar low activity behavior.\nShades rarely initiate hunts and tend to reduce their activity significantly when a player is in the same room. In these situations, their activity can drop by around 80%, and they may avoid interacting altogether.\nA Shade also will not start a hunt if a player is inside the same room. It requires the average team sanity to be around 35% or lower before it can begin a natural hunt.',
    evidences: [
      {
        id: 1,
        text: 'EMF Reader',
      },
      {
        id: 2,
        text: 'Ghost Writing',
      },
      {
        id: 3,
        text: 'SLS Anomaly',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'If a long time has passed without a hunt and the average team sanity is below 35%, the ghost is likely a Shade.',
      },
      {
        id: 2,
        text: 'Shades cannot hunt when summoned with a Summoning Circle. They will appear translucent, stay in the circle for a few seconds, then disappear. However, low sanity from lighting the candles may still trigger a hunt if sanity drops below 35%.',
      },
      {
        id: 3,
        text: 'Shades cannot do false hunts or natural flash events. They can only trigger Whisper or Hallucination events through the Monstrosity Tarot Card.',
      },
    ],
  },
  {
    id: 15,
    name: 'Spirit',
    slug: 'spirit',
    image: spiritIcon,
    behaviour: `The Spirit is a fairly standard ghost with few unique traits. It behaves in a balanced and predictable way, with average activity and hunt patterns compared to other ghosts.\nHowever, Spirits do show a stronger reaction to Incense Burners, making them more noticeably affected when this item is used against them.`,
    evidences: [
      {
        id: 1,
        text: 'Ghost Writing',
      },
      {
        id: 2,
        text: 'Ultraviolet',
      },
      {
        id: 3,
        text: 'Spirit Box',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'Spirits are more affected by Incense Burners. When stunned, a Spirit will fully stop before slowly regaining speed. The stun duration is 6 seconds, compared to the usual 2 seconds for other ghosts.',
      },
      {
        id: 2,
        text: 'Cleansing the ghost room prevents a Spirit from hunting for 3 minutes, instead of the usual 2 minutes for other ghosts.',
      },
    ],
  },
  {
    id: 16,
    name: 'Strigoi',
    slug: 'strigoi',
    image: strigoiIcon,
    behaviour:
      'The Strigoi is a ghost from Romanian folklore that draws its strength from water. It becomes stronger when near a water source, and during hunts it can fade completely from sight, making it harder to track.\nWhen it is away from water, the Strigoi is less stable and easier to spot. It appears more often during hunts, with longer blinks of about 2 seconds between visibility.\nIf a water source it has interacted with is turned off, there is a chance it will react immediately. It may either start a hunt regardless of sanity (12.5% chance) or trigger an interaction instead (33.3% chance).',
    evidences: [
      {
        id: 1,
        text: 'EMF Level 5',
      },
      {
        id: 2,
        text: 'Ghost Writing',
      },
      {
        id: 3,
        text: 'Ghost Orbs',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'Strigoi becomes completely invisible only when very close to an active water source, such as a running sink or filled pool. This can help you study its visibility during hunts.',
      },
      {
        id: 2,
        text: 'You can identify a Strigoi during hunts by observing its blinking speed. When away from water, its visibility blinks are slow, ranging from 1–2 seconds.',
      },
      {
        id: 3,
        text: 'The Strigoi has a unique UV fingerprint of four fingers instead of five, which may appear after door interactions.',
      },
    ],
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
    behaviour:
      'Wraiths are ghosts said to possess the power of flight, as they never step on salt, which can be used as a key way to identify them. They are generally roaming spirits, moving around the area fairly often.\nDuring flash events, Wraiths display a floating animation instead of a normal standing pose. They also have the ability to teleport directly to a random player. When this happens, it may trigger an EMF 2 reading on nearby equipment, even without an obvious interaction, making sudden EMF 2 readings a possible sign of a Wraith.',
    evidences: [
      {
        id: 1,
        text: 'Freezing Temperature',
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
        text: 'Wraiths can sometimes be seen floating during Manifestation events.',
      },
      {
        id: 2,
        text: 'When a Wraith teleports to a player, it may produce an EMF level 2 reading.',
      },
      {
        id: 3,
        text: 'Wraiths will never step in salt. Placing salt piles in the ghost room can help identify them if no footprints appear over time.',
      },
      {
        id: 4,
        text: 'When using an SLS Camera, a Wraith may appear floating while the SLS rig moves around the ghost room. If it is a Wraith, the rig will stay floating the entire time it is visible.',
      },
    ],
  },
  {
    id: 19,
    name: 'Yama',
    slug: 'yama',
    image: yamaIcon,
    behaviour: `The Yama's roaming tendencies set it apart from other ghosts. It is the only ghost besides Nook that can change its favorite room. In fact, it can change its favorite room several times in a match. An important trait Yama has is that both cleansing and stunning it will not just stop the ghost from hunting for two minutes, it will also be unable to roam for the same duration. Nonetheless, this ghost remains arguably the ghost most likely to roam in the game.`,
    evidences: [
      {
        id: 1,
        text: 'Ghost Writing',
      },
      {
        id: 2,
        text: 'Spirit Box',
      },
      {
        id: 3,
        text: 'SLS Anomaly',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'Using an Incense Burner prevents the Yama from roaming for 2 minutes. This includes both cleansing and stun effects during a hunt.',
      },
      {
        id: 2,
        text: 'Yamas blink slower than most ghosts during hunts.',
      },
      {
        id: 3,
        text: 'When a Yama roams, it will always change its favorite room. It cannot roam without changing rooms.',
      },
      {
        id: 4,
        text: 'The Yama has a unique Spirit Box response that sounds like a roar instead of normal responses.',
      },
      {
        id: 5,
        text: 'When an SLS Rig is present, the Yama may cause it to leave the ghost room and wander like a hunting ghost.',
      },
    ],
  },
  {
    id: 20,
    name: 'Yurei',
    slug: 'yurei',
    image: yureiIcon,
    behaviour:
      'The Yurei is a ghost that cannot see, but it has very strong hearing and is highly sensitive to electronic devices. It can detect even small sounds, such as footsteps or the hum of equipment like an EMF Reader.\nDuring hunts, you can sometimes avoid a Yurei by standing still and not holding any active electronics. This may make you “invisible” to it and prevent it from targeting you, as long as you are not in its path.\nElectronics Yurei can hear: Active Spirit Box, Active EMF Reader, Active Parabolic Microphone, Triggered Photo Camera, Active Thermometer, and even Player Chat in-game',
    evidences: [
      {
        id: 1,
        text: 'Freezing Temperature',
      },
      {
        id: 2,
        text: 'Ultraviolet',
      },
      {
        id: 3,
        text: 'Spirit Box',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'You can test for a Yurei by standing still near a wall away from its path during a hunt with an Incense Burner. If it targets you, it is not a Yurei. If it ignores you, it may be a Yurei.',
      },
      {
        id: 2,
        text: 'If a Yurei hears you, it will relentlessly pursue you. Use Incense Burners to delay it and hope the hunt ends. It may also target other nearby players instead if they make noise.',
      },
      {
        id: 3,
        text: 'The Yurei does not speed up in line of sight, so it can be looped around furniture and other objects.',
      },
      {
        id: 4,
        text: 'The Yurei cannot trigger the Car Alarm.',
      },
    ],
  },
  {
    id: 21,
    name: 'Zozo',
    slug: 'zozo',
    image: zozoIcon,
    behaviour:
      'The ZoZo is a very active ghost that becomes irritated when players interact with the Spirit Board. It has a high sanity threshold similar to a Demon. When using the Spirit Board, there is a 50% chance it will override responses—letters and numbers may turn red, and it will repeatedly spell “ZoZo.” Attempting to say “goodbye” may also fail, potentially leading to a forced hunt when trying to leave.\nDuring hunts, the ZoZo moves at average speed. However, its speed changes based on player attention: it slows down when being looked at, and speeds up when not observed. If stared at for too long, it can enter a rage state marked by a loud roar, causing a brief burst of increased speed for about 10 seconds.',
    evidences: [
      {
        id: 1,
        text: 'EMF Level 5',
      },
      {
        id: 2,
        text: 'Ultraviolet',
      },
      {
        id: 3,
        text: 'Spirit Box',
      },
    ],
    tips: [
      {
        id: 1,
        text: 'During hunts, listen for the ZoZo’s scream. This happens when a player stares at it for too long and can help identify the ghost.',
      },
      {
        id: 2,
        text: 'When using a Spirit Board, watch for its special behavior where letters turn red and it keeps spelling “ZoZo,” refusing to turn off.',
      },
      {
        id: 3,
        text: 'High activity early in the round may indicate a ZoZo.',
      },
      {
        id: 4,
        text: 'You can infinitely slow Zozo without it activating its ability by only looking at it for 2 seconds, then quickly moving your gaze away so it is no longer on screen, and then quickly looking back at it again. This resets the Zozo’s meter that triggers its ability.',
      },
    ],
  },
];
