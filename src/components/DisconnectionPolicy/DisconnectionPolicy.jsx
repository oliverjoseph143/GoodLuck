import React from 'react';
import './DisconnectionPolicy.css';

const DisconnectionPolicy = () => {
  return (
    <div className="policy-container">
      <h1 className="highlight">DISCONNECTION POLICY</h1>
      <p>
        Communication problems over the internet may cause sudden disconnection to the game play.
        Khelo24bet is committed to protect our players from unjustifiable loss while eliminating
        the possibility of intentional disconnection and system abuse.
      </p>
      <p>
        As we cannot guarantee uninterrupted connection due to factors such as poor reception or
        weak internet connections, our software has been designed to cope with such situations.
        Kindly read and understand the following disconnection policy:
      </p>
      <ul className="policy-list">
        <li>
          Players must accept the risk of disconnection and should not attempt to log back into
          random playing as quickly as possible. Check with your Internet Service Provider about
          how to reduce the risk of disconnection.
        </li>
        <li>
          Should disconnection occur before a bet is placed successfully, the bet will not be valid.
        </li>
        <li>
          Should disconnection occur after a bet is placed successfully, the bet will be valid and
          results will be determined by the game play. After reconnecting, the results will be shown
          in the game history table.
        </li>
        <li>
          Players may contact Customer Service for wrongly placed bet and game results but will in
          no way alter the results of the bet.
        </li>
        <li>
          Should players experience continuous interruptions to the game play, please contact
          Customer Service for further investigation.
        </li>
        <li>
          Khelo24bet reserves the right to modify, alter, discontinue, cancel, refuse, or void this
          policy at its sole discretion.
        </li>
      </ul>

      <div className="policy-section">
        <h3 className="highlight">1. Live Baccarat</h3>
        <p>The conditions for the online Live Baccarat table will be as follows:</p>
        <ul>
          <li>
            If disconnection occurs before a bet is placed on any of the choices within the Baccarat
            table, the bet will not be valid, and no adjustments will be made in the player’s
            balance. This includes betting on either Player, Banker, Tie, and/or Pair.
          </li>
          <li>
            If disconnection occurs after a bet is placed in any of the choices within the Baccarat
            table; the bet will be valid, and the exact bet amount will be adjusted in the player's
            balance.
          </li>
        </ul>

        <h3 className="highlight">2. Live Roulette</h3>
        <p>The conditions for the online Live Roulette table will be as follows:</p>
        <ul>
          <li>
            If disconnection occurs before a bet is placed on any of the number within the Roulette
            table; the bet will not be valid, and no adjustments will be made in the player's
            balance.
          </li>
          <li>
            If disconnection occurs after a bet is placed on any of the number within the Roulette
            table; the bet will be valid, and the exact bet amount will be adjusted in the player's
            balance.
          </li>
        </ul>

        <h3 className="highlight">3. Live Andar Bahar</h3>
        <p>The conditions for the online Live Andar Bahar table will be as follows:</p>
        <ul>
          <li>
            If disconnection occurs before a bet is placed on any of the choices within the Andar
            Bahar table; the bet will not be valid, and no adjustments will be made in the player's
            balance.
          </li>
          <li>
            If disconnection occurs after a bet is placed on any of the number within the Andar
            Bahar table; the bet will be valid, and the exact bet amount will be adjusted in the
            player's balance.
          </li>
        </ul>

        <h3 className="highlight">4. Online Slots</h3>
        <p>The conditions for the online slot games will be as follows:</p>
        <ul>
          <li>
            If disconnection occurs before you press spin; the bet will not be valid, and no
            adjustments will be made in the player’s balance.
          </li>
          <li>
            If disconnection occurs after you press spin; the bet will be valid, and the exact bet
            amount will be adjusted in the player’s balance.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DisconnectionPolicy;