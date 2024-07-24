import Foundation
import UIKit
import QwaryKit

@objc(QwaryV2)
class QwaryV2: NSObject {

  private var rootViewController: UIViewController? {
      return UIApplication.shared.keyWindow?.rootViewController
  }

  @objc static func requiresMainQueueSetup() -> Bool {
      return true
  }

  @objc func configure(_ qwSettings: String) {
        guard let viewController = rootViewController else {        
            return
        }
        
        Qwary.configure(context: viewController, qwSettings: qwSettings)
    }
  @objc func addEvent(_ eventName:String){
      Qwary.addEvent(eventName:eventName)
    }

  @objc func logout(){
     Qwary.logout()
  } 

 @objc func presentSurvey(_ isBanner:Bool){
   guard let viewController = rootViewController else {        
            return
        }
  Qwary.presentSurvey(fragmentActivity: viewController, isBanner: isBanner)
 }  

 @objc func dismissActiveSurvey(){
  Qwary.dismissActiveSurvey()
 }
}
