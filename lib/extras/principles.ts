import type { Analogy, SectionId } from "../types";

export const analogies: Partial<Record<SectionId, Analogy[]>> = {
  "principles-states": [
    {
      title: "Melting plateau = prying apart the end-of-camp group hug",
      text: "On the last night of CCA camp the whole group is locked in one tight hug. If you put energy in, it all goes into prying people apart, not into making anyone run around faster, until the last arm is unhooked. The people are the particles, the hug is the **forces of attraction**, and how fast people move is the kinetic energy, which is what **temperature** measures. So on a heating curve the temperature stays **constant during melting and boiling**: the energy is used to **overcome the forces of attraction between particles**, not to increase their kinetic energy.",
      breaksDown:
        "Particles in a solid are never standing still: they are vibrating about fixed positions the whole time. And nothing is 'deciding' where the energy goes; it is simply that the attractions must be overcome before the particles can move more freely.",
    },
    {
      title: "Ammonia ring near the HCl end = the faster friend walks further",
      text: "You and a friend start at opposite ends of Orchard Road and walk towards each other to meet for bubble tea. If she walks faster, you meet much nearer your end. In the long tube, ammonia is the fast friend: NH₃ has the **lower Mr (17 v 36.5)** so its particles **move faster**, cover more distance in the same time, and the **white ring of ammonium chloride forms nearer the HCl end**. Both gases spread by **diffusion**: net movement from high to low concentration caused by **random movement**.",
      breaksDown:
        "Gas particles do not walk in a straight line towards each other: they move randomly and bump into air particles billions of times, which is why the ring takes minutes to appear even though the particles themselves are very fast.",
    },
    {
      title: "Saturated solution = the hot chai that cannot take more sugar",
      text: "Stir sugar into a cup of chai and eventually the extra just sits at the bottom: the chai is **saturated**, holding the **maximum mass of solute at that temperature**. Hot chai dissolves far more sugar than iced chai, just as most solids have a **solubility that increases with temperature**. If you cool a hot saturated solution, the solvent can hold less, so the excess **crystallises out**. Mass of crystals = solubility at the higher temperature − solubility at the lower temperature (per 100 g of water), then scale to the water actually used.",
      breaksDown:
        "Chai is a mixture of many substances, whereas a solubility curve is for one solute in pure water, measured in g per 100 g of water. Also, not every solid becomes more soluble when heated; it is true for most, not all.",
    },
  ],
  "principles-mixtures": [
    {
      title: "Filtration = straining the leaves out of masala chai",
      text: "When you pour chai through a strainer, the tea leaves stay behind and the liquid runs through. The leaves are the **insoluble solid (residue)** and the chai in the cup is the **filtrate**. But the sugar you stirred in goes straight through the strainer, because it is **dissolved**: to get a soluble solid back out you need **crystallisation** (evaporate to the crystallisation point, cool, filter, dry), and to get the pure water back you need **simple distillation**. Every separation uses a difference in a physical property.",
      breaksDown:
        "A tea strainer has big holes; filter paper has tiny pores that stop even very fine insoluble particles. And chai contains many dissolved substances, so distilling it would give water, not 'pure chai'.",
    },
    {
      title: "Chromatography = friends drifting with the crowd at a mall sale",
      text: "Picture a crowd sweeping through a mall. Friends who 'go with the flow' get carried far; friends who keep stopping at shop windows get left behind. The crowd is the **solvent (mobile phase)**, the shop windows are the **paper (stationary phase)**, and each dye is a friend: a dye that is **more soluble in the solvent travels further**. **Rf = distance moved by the spot ÷ distance moved by the solvent front**, both from the pencil baseline, so it is always less than 1, and a **pure substance gives one spot**.",
      breaksDown:
        "Dye molecules are not choosing anything: they constantly switch between dissolving in the solvent and sticking to the paper, and the balance of those attractions decides how far they move. Rf values only match if the same solvent is used.",
    },
    {
      title: "Sharp melting point = a dance crew hitting the beat together",
      text: "When a dance crew has rehearsed perfectly, everyone hits the move at exactly the same beat. A **pure substance** is like that: all its particles are identical and held by the same forces, so they all let go at one **sharp, fixed melting or boiling point**. A **mixture** is like a random crowd copying the moves: different particles are held differently, so it **melts or boils over a range of temperatures**. That is why aspirin melting between 128 °C and 133 °C must be impure.",
      breaksDown:
        "Particles do not follow a beat or decide when to move; the point is that identical particles need identical energy to separate. Impurities also usually lower the melting point, which the analogy does not show.",
    },
  ],
  "principles-atoms": [
    {
      title: "Tiny heavy nucleus = a marble on the National Stadium pitch",
      text: "If an atom were blown up to the size of the National Stadium at a sold-out concert, the **nucleus** would be about the size of a marble on the centre of the pitch, yet it would hold **almost all the mass** (protons and neutrons, relative mass 1 each). The **electrons** (relative mass about 1/1836) are out in the stands, arranged in **shells**: the first holds 2, the next 8, then 8, then the 4th shell starts at potassium. Most of the atom is **empty space**.",
      breaksDown:
        "Electrons do not sit in fixed seats: shells are energy levels, and electrons move about the nucleus rather than staying in one place. The scale is only roughly right.",
    },
    {
      title: "Isotopes = the same phone in different-weight cases",
      text: "Two friends have the identical phone model, but one has a slim case and the other a chunky one. The apps, messages and everything the phones actually do are the same; only the weight differs. **Isotopes** are atoms of the same element with the **same number of protons (and electrons)** but **different numbers of neutrons**. Chemistry depends on the electrons, so isotopes have the **same chemical properties**, while the extra neutrons only change **mass and some physical properties** such as density.",
      breaksDown:
        "Neutrons are not an outer case: they are inside the nucleus alongside the protons. And isotopes are not 'versions with accessories': they occur naturally in fixed proportions.",
    },
    {
      title: "Relative atomic mass = the average price of canteen drinks",
      text: "If the canteen sells 75 drinks at $2.00 and 25 at $3.00, the average price is (75 × 2 + 25 × 3) ÷ 100 = $2.25, closer to $2 because more drinks cost that. Chlorine works the same way: 75% chlorine-35 and 25% chlorine-37 gives **Ar = (35 × 75 + 37 × 25) ÷ 100 = 35.5**. The drinks are atoms, the prices are isotopic masses and the sales are **percentage abundances**, so Ar is a **weighted mean** that lies closer to the **most abundant isotope**.",
      breaksDown:
        "Prices have units but Ar has none: it is a relative mass, compared with 1/12 of the mass of a carbon-12 atom. And no single chlorine atom actually has a mass of 35.5.",
    },
  ],
  "principles-periodic": [
    {
      title: "Finding an element = finding your concert seat by row and column",
      text: "A concert ticket says row and seat. On the Periodic Table, the **period (row) = the number of occupied electron shells** and the **group (column) = the number of outer-shell electrons** for groups 1–7. So 2.8.6 is row 3, seat 6: **sulfur**; 2.8.8.2 is row 4, seat 2: **calcium**. Everyone in the same column has the same number of outer electrons, so they have **similar chemical properties**, like fans in the same section reacting to the same song.",
      breaksDown:
        "Concert seats are numbered by the venue, but the table is ordered by increasing atomic number. The simple 'group = outer electrons' rule also does not apply to the transition metals in the middle block.",
    },
    {
      title: "Noble gases = the friend whose phone is already on 100%",
      text: "At a sleepover, the friend with a fully charged phone does not need to borrow a charger, swap cables or share a power bank. **Group 0 noble gases** have a **full outer shell**, a stable electronic configuration, so they do not need to **lose, gain or share electrons**. That makes them **unreactive** and they exist as **single atoms (monatomic)**. Their inertness is useful: argon in filament lamps and welding, helium in balloons, neon in glowing signs.",
      breaksDown:
        "Atoms do not 'need' or 'want' anything: a full outer shell is simply a very stable, low-energy arrangement. Under extreme lab conditions a few heavy noble gases can be forced to react.",
    },
  ],
};
