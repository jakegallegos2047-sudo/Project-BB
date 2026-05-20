/** @param {NS} ns **/
export async function main(ns) {

    const target = ns.args[0] || "phantasy";

    while(true){

        const security = ns.getServerSecurityLevel(target);
        const minSecurity = ns.getServerMinSecurityLevel(target);

        const money = ns.getServerMoneyAvailable(target);
        const maxMoney = ns.getServerMaxMoney(target);

        if(security > minSecurity + 5){
            await ns.weaken(target);
        }
        else if(money < maxMoney * 0.80){
            await ns.grow(target);
        }
        else{
            await ns.hack(target);
        }
    }
}
