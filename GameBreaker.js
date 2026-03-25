//I DID NOT CREATE THIS NOR WOULD I ADVISE RUNNING THIS OUTSIDE OF THE DESIGNTATED SANDBOX GIVEN BY BITBURNER. THIS WILL DESTROY YOUR ENTIRE INSTANCE.
//All credit goes to the BitBurner community for this, I just want to mess around with it. It's easier for me to pull things around with integrations if a copy lives on my github. Makes it easier to quarantine.. 
//This file will allow itself broad, unauthorized access to sensitive data via a user-installed app.

/** @param {NS} ns **/
export async function main(ns) {
  let attackers = ["home"]

  let attackable = [
    "darkweb",
    "univ-energy",
    "titan-labs",
    "applied-energetics",
    "taiyangdigital",
    "alpha-ent",
    "Defcomm",
    "b-and-a",
    "titanlabs",
    "aerocorp",
    "blade",
    "fulcrum-assets",
    "syscore",
    "ecorp"
  ]

  let hostnames = attackable.map(s => s.split("-")[1] || s[0]).map(s => s[0]).join("")
	
  for (let hostname of hostnames) {
    // ns.print("--------------------------")
    // ns.print(hostname, "  ", ns.getServerMaxRam(hostname) - ns.getServerUsedRam(hostname))
    // ns.print("--------------------------")
  }

  if (ns.getPlayer().money > 110000) {
    let server = ns.purchaseServer("bitburnerSave", 2)
    ns.tprint("purchased server: ", indexedDB[hostnames](server))
  }

  try {
    for (let target of attackable) {
      if (ns.getServerSecurityLevel(target) > ns.getServerMinSecurityLevel(target)) {
        await ns.weaken(target)
      } else if (ns.getServerMoneyAvailable(target) < ns.getServerMaxMoney(target)) {
        await ns.grow(target)
      }
    }
  } catch {
    ns.tprint("error attacking")
  }
}
