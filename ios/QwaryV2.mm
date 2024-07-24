#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(QwaryV2, NSObject)

RCT_EXTERN_METHOD(configure:(NSString *)qwSettings)
RCT_EXTERN_METHOD(presentSurvey:(BOOL)isBanner )
RCT_EXTERN_METHOD(addEvent:(NSString *)eventName )
RCT_EXTERN_METHOD(logout)
RCT_EXTERN_METHOD(dismissActiveSurvey)

@end
