export const DocsPanel = () => {
  return (
    <div className="h-full overflow-y-scroll px-2">
      <h2 className="mt-4 text-lg font-medium" id="chain-id">
        CHAIN ID
      </h2>

      <p className="mb-2 text-base leading-relaxed">
        Don't worry about this; it's inconsequential for devnets. In production scenarios (which
        aren't yet supported), you'll want to use a unique integer identifier that represents your
        chain's network on chain indexes like{' '}
        <a href="https://www.chainlist.org" className="underline">
          Chainlist.org
        </a>
        .
      </p>

      <h2 className="mt-2 text-lg font-medium" id="chain-name">
        CHAIN NAME
      </h2>
      <p className="mb-2 text-base leading-relaxed">
        This name provides a way for people to distinguish your Orbit chain from other Orbit chains.
        You&apos;ll want to make this a name that you can easily remember, and that your users and
        developers will recognize.
      </p>
      <h2 className="mt-2 text-lg font-medium" id="challenge-period">
        CHALLENGE PERIOD BLOCKS
      </h2>
      <p className="mb-2 text-base leading-relaxed">
        The Challenge period (blocks) parameter determines the amount of time your chain's
        validators have to dispute - or "challenge" - the current state of the chain posted to your
        Orbit chain's base chain on L2 (Arbitrum Goerli or Sepolia for now; settlement to One and
        Nova mainnet chains isn't supported yet).
      </p>
      <p className="mb-2 text-base leading-relaxed">
        A longer challenge period means that your chain's nodes will have more time to dispute
        fraudulent states, but it also means that your chain's users will have to wait longer to
        withdraw their assets from your chain. This is one of the many tradeoffs that Orbit allows
        you to make when configuring your chain.
      </p>
      <p className="mb-2 text-base leading-relaxed">
        Note that the challenge period is measured in blocks on the underlying L1 chain, not the
        base (L2) chain. For example, if your Orbit chain settles to Arbitrum Goerli, the challenge
        period window would be the number of Challenge period (blocks) multiplied by the L1 Goerli
        block time (~12 seconds).
      </p>
      <h2 className="mt-2 text-lg font-medium" id="base-stake">
        BASE STAKE
      </h2>
      <p className="mb-2 text-base leading-relaxed">
        The Base stake parameter specifies the amount of the stake token (ETH or an ERC-20 token)
        that your chain's validators must deposit in order to post assertions of the state of your
        Orbit chain on the base chain's rollup contracts. This is specified using a float value.
      </p>
      <p className="mb-2 text-base leading-relaxed">
        If your Base stake is low, the barrier to participation will be low, but your chain will be
        more vulnerable to certain types of attacks.
      </p>
      <p className="mb-2 text-base leading-relaxed">
        For example, an Orbit chain with a base stake of 0.01 ETH could be halted by an adversary
        who can afford to deploy sacrificial validators that maliciously challenge every RBlock
        submitted to your Orbit chain's base chain.
      </p>
      <p className="mb-2 text-base leading-relaxed">
        The malicious challenges would result in slashed Orbit chain validators (one slashed
        validator per malicious challenge), but from the adversary's perspective, periodic slashing
        is just the price they have to pay to keep your chain offline.
      </p>
      <p className="mb-2 text-base leading-relaxed">
        A higher base stake incentivize honest participation by making it more expensive to launch
        these types of attacks. However, a higher base stake also translates to a higher barrier to
        entry for your chain's validators. This is another tradeoff to consider.
      </p>
      <h2 className="mt-2 text-lg font-medium" id="owner">
        OWNER
      </h2>
      <p className="mb-2 text-base leading-relaxed">
        This account address is responsible for deploying, owning, and updating your Orbit chain's
        base contracts on its base chain.
      </p>
      <p className="mb-2 text-base leading-relaxed">
        In production scenarios, this is a high-stakes address that's often controlled by a DAO's
        governance protocol or multisig. For your Orbit devnet chain, think of this as a low-stakes
        administrative service account.
      </p>
      <p className="mb-2 text-base leading-relaxed">
        Note that you'll have to fund this address with enough ETH to cover the gas costs of
        deploying your core contracts to L2.
      </p>
      <p className="mb-2 text-base leading-relaxed">
        When deploying your Orbit chain, this address must be a standard Ethereum wallet address
        (precisely speaking, an EOA); it can't be a smart contract/wallet contract.
      </p>
      <h2 className="mt-2 text-lg font-medium" id="gas-token">
        GAS TOKEN
      </h2>
      <p className="mb-2 text-base leading-relaxed">
        The Gas Token parameter specifies the token (ETH or an ERC-20 token) that is natively used
        for gas payments on the network. On Ethereum, Arbitrum One, and Arbitrum Nova the gas token
        is ETH. Orbit chains that are configured as AnyTrust chains can specify a different gas
        token as long as it falls within certain requirements.
      </p>
      <p className="mb-2 text-base leading-relaxed">
        The main requirement for custom gas tokens is that they are natively deployed on the parent
        chain. For example, if a team deploying an Orbit chain wants to use a specific ERC-20 as the
        gas token, that token must be deployed on the parent chain first (i.e. Arbitrum One or
        Nova). During chain deployment, that token is "natively bridged" and then properly
        configured as the native gas token on the new network.
      </p>
      <p className="mb-2 text-base leading-relaxed">
        There are other important considerations to keep in mind when deciding to use a custom gas
        token. Restrictions on the ERC-20 token include:
      </p>
      <ul className="list-inside list-disc">
        <li>In this version, only tokens with 18 decimals are permitted to be the native token.</li>
        <li>The token can't be rebasing or have a transfer fee.</li>
        <li>The token must only be transferrable via a call to the token address itself.</li>
        <li>
          The token must only be able to set allowance via a call to the token address itself.
        </li>
        <li>
          The token must not have a callback on transfer, and more generally a user must not be able
          to make a transfer to themselves revert.
        </li>
      </ul>
      <p className="mb-2 text-base leading-relaxed">
        It is worth reiterating that currently this feature is only supported on Orbit AnyTrust
        chains. Additionally, using a gas token other than ETH adds additional overhead when it
        comes to ensuring chains are funded properly when posting data to their parent chain.
      </p>
      <h2 className="mt-2 text-lg font-medium" id="validators">
        VALIDATORS
      </h2>
      <p className="mb-2 text-base leading-relaxed">
        The first input field is an integer value that determines the number of validators that will
        support your initial deployment. Subsequent fields allow you to specify each of these
        validators' addresses.
      </p>
      <p className="mb-2 text-base leading-relaxed">
        The first validator address is randomly generated and can't be changed. Its private key will
        be automatically generated and stored within one of the JSON configuration files that will
        be generated in a moment.
      </p>
      <p className="mb-2 text-base leading-relaxed">
        Your chain's validators are responsible for validating the integrity of transactions and
        posting assertions of the current state of your Orbit chain to its base chain. In production
        scenarios, your Orbit chain would likely be hosted by a network of validator nodes working
        together. For your local Orbit chain, you can stick to the auto-generated single validator
        address.
      </p>
      <p className="mb-2 text-base leading-relaxed">
        Each of the validator addresses specified in this step will be added to an allow-list in one
        of your chain's base contracts, allowing them each to stake and validate transactions
        submitted to your Orbit chain.
      </p>
      <h2 className="mt-2 text-lg font-medium" id="batch-poster">
        BATCH POSTER ADDRESS
      </h2>
      <p className="mb-2 text-base leading-relaxed">
        Your batch poster address is responsible for posting batches of transactions from your Orbit
        chain to its base contracts on its base chain. An address will automatically be generated
        for you; its private key will be automatically generated and stored within one of the JSON
        configuration files that will be generated in a moment.
      </p>
    </div>
  );
};