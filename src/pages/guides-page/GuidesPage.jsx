import { Link } from 'react-router-dom'; // Changed to react-router-dom (standard practice)
import styles from './GuidesPage.module.css';
import {
  bansheeScream,
  bansheeTarget,
  faejkurSoundMimic,
  fastSaltStep,
  jiangshiHop,
  krasueHeadHunt,
  lamentAbility,
  mareStartingHunt,
  oniWeakening,
  phantomCameraStun,
  poltergeistInteractions,
  slowSaltStep,
  spiritStun,
  yamaSpiritBox,
  yureiBlindness,
  zozoStare,
} from '../../assets';

export function GuidesPage() {
  return (
    <div className={styles.guidesPage}>
      {/* PAGE HEADER */}
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Guides</h1>
        <div className={styles.titleDivider}></div>
        <h2 className={styles.mainHeading}>Process of Elimination</h2>
        <small className={styles.author}>
          By: Slyckster AKA Zazel AKA 01010011 01101001 01101110
        </small>
      </header>

      <div className={styles.contentContainer}>
        {/* INTRODUCTION */}
        <section className={styles.introCard}>
          <p>
            Before reading this guide, I highly recommend familiarizing yourself
            with each ghost type and watching the clips that demonstrate their
            unique traits in the{' '}
            <Link className={styles.link} to="/blair/ghost-types">
              Ghost Types
            </Link>.
          </p>
          <p className={styles.introHighlight}>
            This guide focuses on identifying the ghost <strong>without evidence</strong>, 
            relying solely on ghost behaviors and unique traits.
          </p>
        </section>

        {/* METHODS GRID */}
        <section className={styles.methodsGrid}>
          <article className={styles.methodCard}>
            <h3 className={styles.methodTitle}>
              <span className={styles.methodBadge}>METHOD 1</span>
              Non-Hunting Patterns
            </h3>
            <p className={styles.methodDesc}>
              When the ghost is not hunting, use the following patterns to
              eliminate possible ghost types:
            </p>
            <ul className={styles.methodList}>
              <li>Ghost Events Check</li>
              <li>Salt-Stepping Sound Check</li>
              <li>Candle Check</li>
              <li>Investigation Equipment Check</li>
              <li>Cursed Object Interactions Check</li>
            </ul>
          </article>

          <article className={styles.methodCard}>
            <h3 className={styles.methodTitle}>
              <span className={styles.methodBadge}>METHOD 2</span>
              Hunting Patterns
            </h3>
            <p className={styles.methodDesc}>
              If the ghost is hunting, use these patterns to eliminate possibilities.
              Sometimes, you can identify the ghost at a glance:
            </p>
            <ul className={styles.methodList}>
              <li>Unique Traits Check</li>
              <li>Blink Check</li>
              <li>Speed Check</li>
              <li>Object Fling Check</li>
            </ul>
          </article>
        </section>

        <h2 className={styles.sectionHeader}>How to perform these checks</h2>

        {/* GHOST EVENTS CHECK */}
        <section className={styles.checkSection}>
          <h3 className={styles.checkTitle}>Ghost Events Check</h3>
          <p className={styles.checkDesc}>
            Some ghosts will reveal themselves through specific Ghost Events.
          </p>

          <div className={styles.splitLists}>
            <div className={styles.listGroup}>
              <h4 className={styles.listTitle}>Highly Active Ghosts:</h4>
              <ul className={styles.ghostList}>
                <li><span className={styles.ghostName}>Banshee</span> — Cries and screams much more aggressively if the target is inside the investigation site.</li>
                <li><span className={styles.ghostName}>Demon</span> — Primarily performs events that manifest its physical form.</li>
                <li><span className={styles.ghostName}>Mare</span> — Mostly performs events that turn off or break the lights and fuse box.</li>
                <li><span className={styles.ghostName}>Poltergeist</span> — Capable of performing almost any ghost event.</li>
                <li><span className={styles.ghostName}>Vuult</span> — Mostly performs events that manipulate its voltage charge.</li>
                <li><span className={styles.ghostName}>Zozo</span> — Highly aggressive ghost events.</li>
              </ul>
            </div>

            <div className={styles.listGroup}>
              <h4 className={styles.listTitle}>Inactive / Restricted Ghosts:</h4>
              <ul className={styles.ghostList}>
                <li><span className={styles.ghostName}>Shade</span> — Will never perform manifestation events, but is capable of triggering Hallucination Events.</li>
                <li><span className={styles.ghostName}>Spirit</span> — Cannot trigger events if stunned by an Incense Burner or if its room is cleansed.</li>
                <li><span className={styles.ghostName}>Mare</span> — Inactive if the lights are on.</li>
                <li><span className={styles.ghostName}>Vuult</span> — Inactive if its voltage charge is low.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SALT STEPPING SOUND CHECK */}
        <section className={styles.checkSection}>
          <h3 className={styles.checkTitle}>Salt-Stepping Sound Check</h3>
          <p className={styles.checkDesc}>
            You can eliminate choices by listening to the ghost's footsteps when it steps in salt.
          </p>
          
          <h4 className={styles.listTitle}>Fast Footstep Sounds:</h4>
          <ul className={styles.ghostList}>
            <li><span className={styles.ghostName}>Harrow</span></li>
            <li><span className={styles.ghostName}>Oni</span> — Only if not yet weakened.</li>
            <li><span className={styles.ghostName}>Revenant</span></li>
            <li><span className={styles.ghostName}>Demon</span> — Only after a couple of hunts.</li>
          </ul>
          <video className={styles.media} controls>
            <source src={fastSaltStep} type="video/mp4" />
            Your browser does not support video.
          </video>

          <h4 className={styles.listTitle}>Normal Footstep Sounds:</h4>
          <ul className={styles.ghostList}>
            <li><span className={styles.ghostName}>Banshee</span></li>
            <li>
              <span className={styles.ghostName}>Demon</span> — At the{' '}
              <a
                className={styles.link}
                href="https://www.tiktok.com/@funnyvidsandpst/video/7633687388425850130?lang=en&q=ini%20the%20beningging&t=1780169092543"
                target="_blank"
                rel="noreferrer"
              >
                beningging
              </a>{' '}
              of the round.
            </li>
            <li><span className={styles.ghostName}>Faejkur</span>, <span className={styles.ghostName}>Jiangshi</span>, <span className={styles.ghostName}>Krasue</span>, <span className={styles.ghostName}>Lament</span></li>
            <li><span className={styles.ghostName}>Mare</span>, <span className={styles.ghostName}>Nook</span>, <span className={styles.ghostName}>Phantom</span>, <span className={styles.ghostName}>Poltergeist</span></li>
            <li><span className={styles.ghostName}>Oni</span> — Only if it has been weakened.</li>
            <li><span className={styles.ghostName}>Shade</span>, <span className={styles.ghostName}>Spirit</span>, <span className={styles.ghostName}>Strigoi</span>, <span className={styles.ghostName}>Vuult</span></li>
            <li><span className={styles.ghostName}>Yama</span>, <span className={styles.ghostName}>Yurei</span>, <span className={styles.ghostName}>Zozo</span></li>
          </ul>
          <video className={styles.media} controls>
            <source src={slowSaltStep} type="video/mp4" />
            Your browser does not support video.
          </video>

          <h4 className={styles.listTitle}>Never Steps on Salt:</h4>
          <ul className={styles.ghostList}>
            <li><span className={styles.ghostName}>Wraith</span></li>
          </ul>
        </section>

        {/* CANDLE CHECK */}
        <section className={styles.checkSection}>
          <h3 className={styles.checkTitle}>Candle Check</h3>
          <p className={styles.checkDesc}>Ghosts that have unique interactions with candles:</p>
          <ul className={styles.ghostList}>
            <li><span className={styles.ghostName}>Krasue</span> — Will be forced to change its appearance to its head form.</li>
            <li><span className={styles.ghostName}>Mare</span> — Has a much larger radius for blowing out candles.</li>
          </ul>
        </section>

        {/* INVESTIGATION EQUIPMENT CHECK */}
        <section className={styles.checkSection}>
          <h3 className={styles.checkTitle}>Investigation Equipment Check</h3>
          <p className={styles.checkDesc}>Ghosts with unique reactions to your gear:</p>
          <ul className={styles.ghostList}>
            <li>
              <span className={styles.ghostName}>Banshee</span> — Can sometimes be heard screaming through the Parabolic Microphone.
              <audio className={styles.mediaAudio} controls>
                <source src={bansheeScream} type="audio/mpeg" />
                Your browser does not support audio.
              </audio>
            </li>
            <li><span className={styles.ghostName}>Demon</span> — Has a larger radius to burn a Crucifix from its favorite room.</li>
            <li>
              <span className={styles.ghostName}>Faejkur</span> — Can mimic the sound of the SLS Camera, EMF Reader, and Trail Camera.
              <video className={styles.media} controls>
                <source src={faejkurSoundMimic} type="video/mp4" />
                Your browser does not support video.
              </video>
            </li>
            <li><span className={styles.ghostName}>Nook</span> — Has a rare chance to steal items directly from your inventory.</li>
            <li><span className={styles.ghostName}>Poltergeist</span> — Stacking objects in its room will provoke it into revealing itself by throwing multiple items at once.</li>
            <li><span className={styles.ghostName}>Strigoi</span> — Has a chance to start a hunt immediately if running water is turned off.</li>
            <li><span className={styles.ghostName}>Wraith</span> — The EMF Reader will suddenly spike to Level 2, indicating it has teleported to you.
            
              <iframe
                allowFullScreen
                className={styles.media}
                src="https://www.youtube.com/embed/2d0ApZhc90A"
                title="Wraith Info"
              /></li>
            <li>
              <span className={styles.ghostName}>Yama</span> — Can be heard screaming through the Spirit Box.
              <audio className={styles.mediaAudio} controls>
                <source src={yamaSpiritBox} type="audio/mpeg" />
                Your browser does not support audio.
              </audio>
            </li>
          </ul>
        </section>

        {/* CURSED OBJECT INTERACTION CHECK */}
        <section className={styles.checkSection}>
          <h3 className={styles.checkTitle}>Cursed Object Interactions Check</h3>
          <p className={styles.checkDesc}>Ghosts that interact uniquely with cursed objects:</p>
          <ul className={styles.ghostList}>
            <li><span className={styles.ghostName}>Banshee</span> — Ignores the Music Box holder if its true target is inside the investigation site.</li>
            <li><span className={styles.ghostName}>Jiangshi</span> — Can skip letters entirely when using the Spirit Board.</li>
            <li><span className={styles.ghostName}>Shade</span> — Appears translucent in the Summoning Circle and will not initiate a hunt.</li>
            <li><span className={styles.ghostName}>Zozo</span> — Can sabotage the Spirit Board, turning the letters red.</li>
          </ul>
        </section>

        {/* UNIQUE TRAIT CHECK */}
        <section className={styles.checkSection}>
          <h3 className={styles.checkTitle}>Unique Trait Check</h3>
          <p className={styles.checkDesc}>Many ghosts can be identified by distinct hunting behaviors or visual traits:</p>
          <ul className={styles.ghostList}>
            <li>
              <span className={styles.ghostName}>Banshee</span> — Targets only one player and ignores everyone else. However, if the target is outside the site, it will attack randomly.
              <video className={styles.media} controls>
                <source src={bansheeTarget} type="video/mp4" />
              </video>
            </li>
            <li><span className={styles.ghostName}>Demon</span> — Gains permanent speed with each consecutive hunt.</li>
            <li><span className={styles.ghostName}>Faejkur</span> — During a hunt, it can project fake footstep sounds in a different direction.</li>
            <li><span className={styles.ghostName}>Harrow</span> — Exceptionally fast near its favorite room, but weakens/slows down significantly if lured away.</li>
            <li>
              <span className={styles.ghostName}>Jiangshi</span> — Footstep sounds occasionally pause due to its hopping movement.
              <video className={styles.media} controls>
                <source src={jiangshiHop} type="video/mp4" />
              </video>
            </li>
            <li>
              <span className={styles.ghostName}>Krasue</span> — Can change its appearance into a floating head.
              <video className={styles.media} controls>
                <source src={krasueHeadHunt} type="video/mp4" />
              </video>
            </li>
            <li>
              <span className={styles.ghostName}>Lament</span> — Can fake the end of a hunt by turning off the lights early and masking its heartbeat/footsteps.
              <video className={styles.media} controls>
                <source src={lamentAbility} type="video/mp4" />
              </video>
            </li>
            <li>
              <span className={styles.ghostName}>Mare</span> — Always turns off the lights before hunting. Can migrate to other rooms if its current room's lights stay on.
              <video className={styles.media} controls>
                <source src={mareStartingHunt} type="video/mp4" />
              </video>
            </li>
            <li><span className={styles.ghostName}>Nook</span> — Can change its favorite room, but only to the adjacent room with the most objects.</li>
            <li>
              <span className={styles.ghostName}>Oni</span> — Is heavily weakened by Salt, Incense Burners, and Crucifixes.
              <video className={styles.media} controls>
                <source src={oniWeakening} type="video/mp4" />
              </video>
            </li>
            <li>
              <span className={styles.ghostName}>Phantom</span> — Invisible to standard cameras. Taking a photo of it acts like an Incense Burner stun.
              <video className={styles.media} controls>
                <source src={phantomCameraStun} type="video/mp4" />
              </video>
            </li>
            <li><span className={styles.ghostName}>Revenant</span> — Its intense speed-up ability can be interrupted by stunning it with an Incense Burner.</li>
            <li>
              <span className={styles.ghostName}>Spirit</span> — Suffers an extreme movement speed penalty when stunned by an Incense Burner.
              <video className={styles.media} controls>
                <source src={spiritStun} type="video/mp4" />
              </video>
            </li>
            <li><span className={styles.ghostName}>Strigoi</span> — Has a long 2-second blink during hunts, and becomes completely invisible when near running water.</li>
            <li>
              <span className={styles.ghostName}>Vuult</span> — When fully charged, it can destroy EMF Readers, shatter lights, and rapidly toggle the fuse box.
              <iframe
                allowFullScreen
                className={styles.media}
                src="https://www.youtube.com/embed/1L9AMHkHGuA"
                title="Full charged Vuult"
              />
            </li>
            <li>
              <span className={styles.ghostName}>Wraith</span> — Unlike other roaming ghosts, it can change its favorite room without ever stepping on salt.
            </li>
            <li><span className={styles.ghostName}>Yama</span> — Known to frequently change its favorite room.</li>
            <li>
              <span className={styles.ghostName}>Yurei</span> — Cannot detect you if you remain completely motionless.
              <video className={styles.media} controls>
                <source src={yureiBlindness} type="video/mp4" />
              </video>
            </li>
            <li>
              <span className={styles.ghostName}>Zozo</span> — Staring at it for too long will trigger its special hunting ability.
              <video className={styles.media} controls>
                <source src={zozoStare} type="video/mp4" />
              </video>
            </li>
          </ul>
        </section>

        {/* BLINK CHECK */}
        <section className={styles.checkSection}>
          <h3 className={styles.checkTitle}>Blink Check</h3>
          <p className={styles.checkDesc}>Ghosts can sometimes be identified by how quickly they blink in and out of visibility during a hunt:</p>
          <ul className={styles.ghostList}>
            <li><span className={styles.ghostName}>Poltergeist</span> — Has the fastest blink.</li>
            <li><span className={styles.ghostName}>Yama</span> — Has an abnormally slow blink.</li>
            <li><span className={styles.ghostName}>Strigoi</span> — Has the longest blink cycle; can remain completely invisible for seconds at a time.</li>
            <li><span className={styles.ghostName}>All other ghosts</span> — Normal blink speed.</li>
          </ul>
          <iframe
            allowFullScreen
            className={styles.media}
            src="https://www.youtube.com/embed/PQn5xQLC6lI"
            title="Blink Identification"
          />
        </section>

        {/* SPEED CHECK */}
        <section className={styles.checkSection}>
          <h3 className={styles.checkTitle}>Speed Check</h3>
          <p className={styles.checkDesc}>Observing a ghost's movement speed during a hunt is a great identifier.</p>
          
          <h4 className={styles.listTitle}>Unique Speed Modifiers:</h4>
          <ul className={styles.ghostList}>
            <li>
              <span className={styles.ghostName}>Demon</span> — Starts slow at the{' '}
              <a
                className={styles.link}
                href="https://www.tiktok.com/@funnyvidsandpst/video/7633687388425850130"
                target="_blank"
                rel="noreferrer"
              >
                beningging
              </a>{' '}
              of the round, but permanently increases in speed with each subsequent hunt.
            </li>
            <li><span className={styles.ghostName}>Harrow</span> — Extremely fast near its room, but significantly slower when lured far away.</li>
            <li><span className={styles.ghostName}>Krasue</span> — Fast in its head form, but can be slowed down if many candles are lit around it.</li>
            <li><span className={styles.ghostName}>Oni</span> — Naturally very fast, but becomes permanently slower after reacting to Salt, Incense, or a burning Crucifix.</li>
            <li><span className={styles.ghostName}>Revenant</span> — Extremely fast when it has a line of sight, but practically crawls when searching.</li>
            <li><span className={styles.ghostName}>Zozo</span> — Fast when searching, slows down when being looked at, and bursts into extreme speed after it screams.</li>
          </ul>

          <div className={styles.splitLists}>
            <div className={styles.listGroup}>
              <h4 className={styles.listTitle}>Constant Slow Speed:</h4>
              <ul className={styles.ghostList}>
                <li><span className={styles.ghostName}>Lament</span></li>
                <li><span className={styles.ghostName}>Yurei</span></li>
              </ul>
            </div>
            <div className={styles.listGroup}>
              <h4 className={styles.listTitle}>Standard Line-of-Sight Speed:</h4>
              <p className={styles.checkDesc}>Starts slow, but gain speed the longer it sees a player.</p>
              <ul className={styles.ghostList} style={{ marginTop: '-18px' }}>
                <li>All other ghosts.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* OBJECT FLING CHECK */}
        <section className={styles.checkSection}>
          <h3 className={styles.checkTitle}>Object Fling Check</h3>
          <p className={styles.checkDesc}>These ghosts are known to throw objects with extreme force:</p>
          <ul className={styles.ghostList}>
            <li><span className={styles.ghostName}>Faejkur</span>, <span className={styles.ghostName}>Krasue</span>, <span className={styles.ghostName}>Nook</span></li>
            <li><span className={styles.ghostName}>Poltergeist</span>, <span className={styles.ghostName}>Shade</span>, <span className={styles.ghostName}>Vuult</span></li>
          </ul>
        </section>

      </div>
    </div>
  );
}