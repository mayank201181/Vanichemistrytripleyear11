import type { Analogy, SectionId } from "../types";

export const analogies: Partial<Record<SectionId, Analogy[]>> = {
  "organic-intro": [
    {
      title: "Homologous series = the same top in sizes XS to XL",
      text: "A shop sells one design of top in XS, S, M, L and XL. They all have the **same design** — like members of a **homologous series** having the **same functional group**, so they have **similar chemical properties**. Each size is bigger than the last by a fixed step, just as each member differs from the next by **CH₂**, and the fit changes **gradually** — like the **gradual trend in physical properties** (boiling point rises as the chain gets longer). The size chart is like the **general formula**, e.g. CₙH₂ₙ₊₂ for alkanes.",
      breaksDown:
        "Clothes come in only a few sizes, but a homologous series carries on indefinitely. Also, longer chains raise the boiling point because of stronger intermolecular forces, not because the molecule simply 'weighs more'.",
    },
    {
      title: "Structural isomers = same beads, different bracelet",
      text: "Give two friends the same bag of beads — four big ones and ten small ones — and one threads them in a straight line while the other adds a little dangling branch. Same beads (**same molecular formula**, C₄H₁₀), different arrangement (**different structural formula**): butane and methylpropane are **structural isomers**, and they really are different substances with different boiling points. But if you just twist or flip your bracelet, it's still the same bracelet — a molecule that is only bent or flipped on paper is the **same compound**, not an isomer.",
      breaksDown:
        "Beads can be rethreaded in seconds, but turning one isomer into another means breaking and remaking covalent bonds. And carbon must always have four bonds, so not every arrangement you can draw is allowed.",
    },
    {
      title: "Organic names = a bubble tea order code",
      text: "A bubble tea order like 'large, brown sugar, pearls on top' tells the staff exactly what to make. An organic name works the same way: the **stem** gives the size — **meth 1, eth 2, prop 3, but 4, pent 5** carbons; the **ending** gives the family — **-ane, -ene, -anol, -anoic acid**; and a **number** says where the functional group sits, like **propan-2-ol** (–OH on the middle carbon) or **but-1-ene**. Always number from the end that gives the **lowest** number, so it's never 'but-3-ene'.",
      breaksDown:
        "Bubble tea orders are just a habit of the shop; IUPAC naming rules are fixed and every chemist uses the same ones. The stem counts carbons in the main chain only, not every carbon in a branched molecule.",
    },
  ],
  "organic-crude": [
    {
      title: "Fractional distillation = getting off the lift at your floor",
      text: "Imagine a lift in a tall building that gets **cooler on every floor** going up. Everyone gets in at the hot ground floor (the furnace), and each person gets out at the first floor that is cool enough for them. Molecules with **high boiling points** (long chains, like **fuel oil**) 'get out' low down because they **condense** as soon as the temperature drops below their boiling point; **short-chain** molecules with low boiling points ride to the **top** as **refinery gases**. Each floor's tray collects a **fraction** — a **mixture** of hydrocarbons with **similar boiling points**. **Bitumen** never even gets in the lift: it doesn't vaporise and drains from the bottom.",
      breaksDown:
        "People choose their floor; molecules simply condense when the temperature falls below their boiling point. And each floor collects a mixture of similar molecules, not one single compound.",
    },
    {
      title: "Longer chains are more viscous = long earphone cables tangle more",
      text: "Throw a long earphone cable and a short charging cable into your bag: the long one comes out a tangled mess that is hard to pull apart. Longer hydrocarbon molecules have **more contact** with their neighbours, so the **intermolecular forces** between them are **stronger**. More energy is needed to separate them, so going down the column the **boiling point increases**, they become more **viscous** (flow less easily), **darker** and **harder to ignite**.",
      breaksDown:
        "Molecules don't actually knot together — the 'tangle' is attraction between molecules. Boiling overcomes these intermolecular forces; the covalent bonds inside each molecule are not broken.",
    },
    {
      title: "Cracking = upcycling unsold maxi dresses into crop tops",
      text: "A thrift shop has racks of long maxi dresses nobody buys and a waiting list for crop tops. So it cuts each long dress into a crop top plus some offcuts that become scrunchies. That's **cracking**: long-chain alkanes (in **low demand**) are broken into **shorter alkanes** like petrol (in **high demand**) **plus alkenes** (the 'offcuts' that are valuable for making **polymers** and ethanol). It's done with a **silica or alumina catalyst at 600–700 °C**. Like the fabric, no atoms are lost: C₁₀H₂₂ → C₈H₁₈ + C₂H₄ — check C and H both balance.",
      breaksDown:
        "Unlike offcuts, the alkenes are a different type of molecule (they contain a C=C) — cracking makes something distillation never could. And you can't stitch cracked molecules back into the original alkane.",
    },
  ],
  "organic-hydrocarbons": [
    {
      title: "Addition to C=C = friends holding both hands letting one go",
      text: "Picture two friends holding **both** hands — that's the **C=C double bond**. When a bromine molecule arrives, they let go with **one** hand each and grab a bromine atom instead, while still holding hands with the other. Each carbon gains one Br and you get **one product only**: C₂H₄ + Br₂ → **1,2-dibromoethane**. This uses up the orange bromine, so bromine water turns **orange to colourless** — the test for an **unsaturated** alkene.",
      breaksDown:
        "Both 'hands' of a C=C are not identical — one bond is weaker and breaks more easily, which is why alkenes are reactive. Atoms also don't 'grab' on purpose; new covalent bonds form when the molecules collide.",
    },
    {
      title: "Alkane substitution = a full hawker table: someone must leave",
      text: "At a full hawker centre table there's no empty seat, so a new friend can only sit down if someone else gets up and leaves. An **alkane** is **saturated** — every carbon already has four single bonds, so nothing can add on. Bromine can only **substitute**: a **hydrogen is replaced by a bromine** and the hydrogen leaves as **hydrogen bromide**: CH₄ + Br₂ → CH₃Br + **HBr**. It also needs a push — **UV light** provides the energy to break the Br–Br bond — so in the dark the bromine water **stays orange**.",
      breaksDown:
        "The hydrogen doesn't leave alone — it pairs with a bromine atom to form HBr, so there are two products. With excess bromine, more hydrogens can be replaced, giving a mixture of products.",
    },
  ],
  "organic-alcohols": [
    {
      title: "Fermentation conditions = proving pav dough in a warm spot",
      text: "To make pav rise, you leave the dough with **yeast** and sugar in a **warm** place — not in the fridge (too slow) and not in a hot oven (it kills the yeast). Fermentation for ethanol is the same: the yeast's **enzymes** catalyse C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ best at **about 30 °C**; too cold and it's **too slow**, too hot and the enzymes are **denatured**. The bubbles that make dough rise are the **carbon dioxide**. For ethanol, the mixture must also be kept **anaerobic** (no air), otherwise the ethanol is **oxidised to ethanoic acid**.",
      breaksDown:
        "In bread the ethanol evaporates during baking, so there's none in the pav. And the yeast isn't killed by heat like a living plant wilting — the enzymes' active sites change shape (denature).",
    },
    {
      title: "Fermentation vs hydration = handmade soy candles vs a factory line",
      text: "A small studio makes candles by hand from **soy wax** (a **renewable** crop) in **batches**, at low temperatures — **slow** and each batch a bit variable. A factory pours **paraffin wax** (made from **crude oil**, **non-renewable**) on a **continuous** line, **fast** and identical, but with big energy bills. That's **fermentation** (renewable sugar, about 30 °C, slow, batch, **impure** ~15% ethanol that must be distilled) versus **hydration of ethene** (steam, **300 °C, 60–70 atm, phosphoric acid catalyst**, fast, continuous, **pure** ethanol, non-renewable, high energy). In an 'evaluate' question, give points for both, then decide using the context.",
      breaksDown:
        "Handmade isn't automatically 'greener' — growing crops needs land, and fermentation also releases CO₂. Hydration of ethene is an addition reaction, so ethanol is the only product.",
    },
    {
      title: "Oxidation of ethanol = a cut apple browning in the air",
      text: "Leave a cut apple out and oxygen from the air changes it — it goes brown. Ethanol is changed by oxygen too: **bacteria in the air** oxidise the ethanol in an open bottle to **ethanoic acid**, which is why it turns to **vinegar** (**microbial oxidation**). In the lab, the oxygen comes from **acidified potassium dichromate(VI)** instead: heat them and the solution turns **orange → green** as ethanol is oxidised to ethanoic acid. It's also why fermentation must be **anaerobic** — keep the 'lid on'.",
      breaksDown:
        "Apple browning makes coloured compounds, not an acid — only the 'oxygen changes it' idea carries over. Don't mix up the colour changes: dichromate goes orange → green, bromine water goes orange → colourless.",
    },
  ],
  "organic-acids-esters": [
    {
      title: "Weak acid = a quiet class where only a few hands go up",
      text: "Ask a question in a quiet class and only a few hands go up at any moment, though different people raise and lower them. In ethanoic acid solution only a **small fraction** of molecules have released their **H⁺** at any moment (CH₃COOH ⇌ CH₃COO⁻ + H⁺) — it is **partially ionised**, a **weak acid**. A strong acid is the class where **every hand** goes up. So at the **same concentration**, ethanoic acid has **fewer H⁺ ions**, a **higher pH** (about 3) and reacts more **slowly** with magnesium or carbonates — but it still gives the **same products**.",
      breaksDown:
        "'Weak' is not the same as 'dilute' — a weak acid can be concentrated. And molecules aren't choosing; the ⇌ means ionisation and recombination happen all the time.",
    },
    {
      title: "Esterification = clicking two halves together, a tab snaps off",
      text: "Think of a 'best friends' necklace: two halves click together, and a little protective tab snaps off each piece where they join. In esterification the **carboxylic acid** loses its **–OH** and the **alcohol** loses the **H** from its –OH; those bits leave together as **water**, and the remaining oxygen joins the two parts with an **ester link (–COO–)**. **Concentrated sulfuric acid** is the catalyst. The **⇌** means the halves can also come apart again, so the yield is never 100%.",
      breaksDown:
        "Necklace halves don't need warming or a catalyst; this reaction does (warm it in a water bath, no naked flame — it's flammable). And the bits that leave really do form a new molecule, water.",
    },
    {
      title: "Ester names = first name first, even if the register says surname",
      text: "A school register might list you as 'Surname, First name', but you'd introduce yourself first name first. Esters are the same: the formula CH₃COOC₂H₅ is written **acid part first**, but the name puts the **alcohol part first** (-**yl**) and the **acid part second** (-**anoate**): **ethyl ethanoate**. So methanol + propanoic acid gives **methyl propanoate**, and propanol + ethanoic acid gives **propyl ethanoate**.",
      breaksDown:
        "People's names are just a convention that varies by culture; ester naming is a fixed IUPAC rule. Always work out which carbons came from the acid (including the C of –COO–) and which from the alcohol.",
    },
  ],
  "organic-polymers": [
    {
      title: "Addition polymerisation = a conga line where nobody leaves",
      text: "At a party everyone starts with both hands holding their own partner's — the **C=C double bond**. When the conga starts, each person lets go with one hand and grabs the next dancer, forming one enormous line. In **addition polymerisation** the **double bond opens**, alkene **monomers** link into a long chain, and **nobody leaves** — the **polymer is the only product**: n CH₂=CH₂ → –[CH₂–CH₂]ₙ–. The **repeat unit** has the two carbons joined by a **single** bond, with bonds sticking out through the brackets.",
      breaksDown:
        "Real chains are thousands of monomers long and tangled, not a neat line. And the groups on each carbon (H, CH₃, Cl) stay as side groups — they don't join the main chain.",
    },
    {
      title: "Condensation polymer = two-colour beads that drop a tab each link",
      text: "Make a bracelet from two colours of bead, each with a clip at **both** ends; every time two clip together, a tiny plastic tab snaps off. A **polyester** forms from a **dicarboxylic acid** and a **diol** — two **different** monomers, each with **two functional groups**, so the chain can keep growing at both ends. Each time –COOH meets –OH an **ester link** forms and a small molecule — **water** — is **eliminated**. That's why ethanoic acid + ethanol only make one small ester: each has just **one** clip.",
      breaksDown:
        "Snapped-off tabs are waste plastic, but the water lost is a real product: n diacid + n diol → polyester + 2n H₂O. Some biopolyesters, like PLA, use a single monomer with both groups.",
    },
    {
      title: "Biodegradable = a chain with clasps microbes can undo",
      text: "Poly(ethene) is like a welded metal chain — strong **C–C and C–H bonds** all the way along, with nowhere to undo it — so it is **inert** and **non-biodegradable** and sits in landfill for hundreds of years. A **biopolyester** is like a necklace with a clasp every few links: microorganisms' enzymes can open the **ester links**, so it **breaks down**. Burning plastics isn't a clean fix either — it releases **toxic gases** such as **hydrogen chloride** from PVC.",
      breaksDown:
        "Microbes don't literally unclip anything — their enzymes break the ester links by hydrolysis. And 'biodegradable' often needs the right conditions, such as an industrial compost heap.",
    },
  ],
};
