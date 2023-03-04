import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BalanceIcon } from './BalanceIcon';
import { BatteryIcon } from './BatteryIcon';
import { BusinessBarGraphIcon } from './BusinessBarGraphIcon';
import { BusinessCreditCard } from './BusinessCreditCard/BusinessCreditCard';
import { CellularConnectionIcon } from './CellularConnectionIcon';
import { Ellipse1Icon } from './Ellipse1Icon';
import { Ellipse1881Icon } from './Ellipse1881Icon';
import { HomeIndicator } from './HomeIndicator/HomeIndicator';
import { HugeIconIcon } from './HugeIconIcon';
import classes from './IPhone1313Pro1.module.css';
import { MenuMore_verticalIcon } from './MenuMore_verticalIcon';
import { Rectangle468Icon } from './Rectangle468Icon';
import { SocialIconsAmazonWcIcon } from './SocialIconsAmazonWcIcon';
import { SocialIconsAppleWcIcon } from './SocialIconsAppleWcIcon';
import { SocialIconsMastercardWcIcon } from './SocialIconsMastercardWcIcon';
import { SocialIconsMcdonaldsWcIcon } from './SocialIconsMcdonaldsWcIcon';
import { SocialIconsStarbucksWcIcon } from './SocialIconsStarbucksWcIcon';
import { SubtractIcon } from './SubtractIcon';
import { UserInterfaceHouseIcon } from './UserInterfaceHouseIcon';
import { UserInterfacePlus } from './UserInterfacePlus/UserInterfacePlus';
import { UsersAccount } from './UsersAccount/UsersAccount';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { WifiIcon } from './WifiIcon';
import { WorkIcon } from './WorkIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const IPhone1313Pro1: FC<Props> = memo(function IPhone1313Pro1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.statusBar}>
        <div className={classes.battery}>
          <BatteryIcon className={classes.icon4} />
        </div>
        <div className={classes.wifi}>
          <WifiIcon className={classes.icon5} />
        </div>
        <div className={classes.cellularConnection}>
          <CellularConnectionIcon className={classes.icon6} />
        </div>
        <div className={classes.timeStyle}>
          <div className={classes.time}>9:41</div>
        </div>
      </div>
      <div className={classes.frame16}>
        <div className={classes.frame13}>
          <div className={classes.frame12}>
            <div className={classes.ellipse1}>
              <Ellipse1Icon className={classes.icon7} />
            </div>
            <div className={classes.welcomeBackBenjaminJohnson}>
              <div className={classes.textBlock}>Welcome back!</div>
              <div className={classes.textBlock2}>
                <p className={classes.labelWrapper}>
                  <span className={classes.label}>Benjamin Johnson</span>
                </p>
              </div>
            </div>
          </div>
          <div className={classes.frame11}>
            <div className={classes.frame10}>
              <div className={classes.frame9}>
                <div className={classes.frame8}>
                  <div className={classes.hugeIcon}>
                    <HugeIconIcon className={classes.icon8} />
                  </div>
                  <div className={classes.menuMore_Vertical}>
                    <MenuMore_verticalIcon className={classes.icon9} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.cards}>
        <div className={classes.subtract}>
          <SubtractIcon className={classes.icon10} />
        </div>
        <div className={classes.amazon}>
          <div className={classes.base}></div>
          <div className={classes.amazon2}>
            <div className={classes.amazon3}>
              <div className={classes.socialIconsAmazonWC}>
                <SocialIconsAmazonWcIcon className={classes.icon11} />
              </div>
              <div className={classes.amazonMay12024}>
                <div className={classes.textBlock3}>Amazon</div>
                <div className={classes.textBlock4}>
                  <p className={classes.labelWrapper2}>
                    <span className={classes.label2}>May 1, 2024</span>
                  </p>
                </div>
                <div className={classes.textBlock5}>
                  <p></p>
                </div>
              </div>
            </div>
            <div className={classes.frame17}>
              <div className={classes._10322}>-$103.22</div>
            </div>
          </div>
        </div>
        <div className={classes.mcDonalds}>
          <div className={classes.base2}></div>
          <div className={classes.mcDonalds2}>
            <div className={classes.mcDonalds3}>
              <div className={classes.socialIconsMcdonaldsWC}>
                <SocialIconsMcdonaldsWcIcon className={classes.icon12} />
              </div>
              <div className={classes.mcDonaldsMay22024}>
                <div className={classes.textBlock6}>McDonalds</div>
                <div className={classes.textBlock7}>
                  <p className={classes.labelWrapper3}>
                    <span className={classes.label3}>May 2, 2024</span>
                  </p>
                </div>
                <div className={classes.textBlock8}>
                  <p></p>
                </div>
              </div>
            </div>
            <div className={classes.frame172}>
              <div className={classes._13333}>-$133.33</div>
            </div>
          </div>
        </div>
        <div className={classes.apple}>
          <div className={classes.base3}></div>
          <div className={classes.apple2}>
            <div className={classes.apple3}>
              <div className={classes.socialIconsAppleWC}>
                <SocialIconsAppleWcIcon className={classes.icon13} />
              </div>
              <div className={classes.appleMay82024}>
                <div className={classes.textBlock9}>Apple</div>
                <div className={classes.textBlock10}>
                  <p className={classes.labelWrapper4}>
                    <span className={classes.label4}>May 8, 2024</span>
                  </p>
                </div>
                <div className={classes.textBlock11}>
                  <p></p>
                </div>
              </div>
            </div>
            <div className={classes.frame173}>
              <div className={classes._15656}>-$156.56</div>
            </div>
          </div>
        </div>
        <div className={classes.masterCard}>
          <div className={classes.base4}></div>
          <div className={classes.masterCard2}>
            <div className={classes.masterCard3}>
              <div className={classes.socialIconsMastercardWC}>
                <SocialIconsMastercardWcIcon className={classes.icon14} />
              </div>
              <div className={classes.masterCardMay92024}>
                <div className={classes.textBlock12}>MasterCard</div>
                <div className={classes.textBlock13}>
                  <p className={classes.labelWrapper5}>
                    <span className={classes.label5}>May 9, 2024</span>
                  </p>
                </div>
                <div className={classes.textBlock14}>
                  <p></p>
                </div>
              </div>
            </div>
            <div className={classes.frame174}>
              <div className={classes._27611}>-$276.11</div>
            </div>
          </div>
        </div>
        <div className={classes.starbucks}>
          <div className={classes.base5}></div>
          <div className={classes.starbucks2}>
            <div className={classes.starbucks3}>
              <div className={classes.socialIconsStarbucksWC}>
                <SocialIconsStarbucksWcIcon className={classes.icon15} />
              </div>
              <div className={classes.starbucksMay102024}>
                <div className={classes.textBlock15}>Starbucks</div>
                <div className={classes.textBlock16}>
                  <p className={classes.labelWrapper6}>
                    <span className={classes.label6}>May 10, 2024</span>
                  </p>
                </div>
                <div className={classes.textBlock17}>
                  <p></p>
                </div>
              </div>
            </div>
            <div className={classes.frame175}>
              <div className={classes._1778}>-$177.8</div>
            </div>
          </div>
        </div>
        <div className={classes.freelancer}>
          <div className={classes.base6}></div>
          <div className={classes.freelancer2}>
            <div className={classes.freelancer3}>
              <div className={classes.work}>
                <WorkIcon className={classes.icon16} />
              </div>
              <div className={classes.freelancerMay112024}>
                <div className={classes.textBlock18}>Freelancer</div>
                <div className={classes.textBlock19}>
                  <p className={classes.labelWrapper7}>
                    <span className={classes.label7}>May 11, 2024</span>
                  </p>
                </div>
                <div className={classes.textBlock20}>
                  <p></p>
                </div>
              </div>
            </div>
            <div className={classes.frame176}>
              <div className={classes._33000}>+$3300.00</div>
            </div>
          </div>
        </div>
        <div className={classes.myTransaction}>My transaction</div>
      </div>
      <div className={classes.availableBalnce}>
        <div className={classes.balance}>
          <BalanceIcon className={classes.icon17} />
        </div>
        <div className={classes.availabeBalance}>
          <div className={classes._33200}>$3,320,00</div>
          <div className={classes.availableBalance}>Available Balance </div>
        </div>
      </div>
      <div className={classes.tabBar}>
        <div className={classes.rectangle468}>
          <Rectangle468Icon className={classes.icon18} />
        </div>
        <HomeIndicator className={classes.homeIndicator2} classes={{ homeIndicator: classes.homeIndicator }} />
        <div className={classes.icons}>
          <div className={classes.home}>
            <div className={classes.userInterfaceHouse}>
              <UserInterfaceHouseIcon className={classes.icon19} />
            </div>
          </div>
          <div className={classes.cards2}>
            <BusinessCreditCard
              swap={{
                vector: <VectorIcon className={classes.icon} />,
              }}
            />
          </div>
          <div className={classes.profile}>
            <UsersAccount
              swap={{
                vector: <VectorIcon3 className={classes.icon3} />,
              }}
            />
          </div>
          <div className={classes.statistic}>
            <div className={classes.businessBarGraph}>
              <BusinessBarGraphIcon className={classes.icon20} />
            </div>
          </div>
        </div>
        <div className={classes.ellipse1881}>
          <Ellipse1881Icon className={classes.icon21} />
        </div>
      </div>
    </div>
  );
});
