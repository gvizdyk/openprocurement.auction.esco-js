export default function AuctionConfig($logProvider, AuctionConfig, growlProvider, GTMLoggerProvider) {
  GTMLoggerProvider.level('INFO').includeTimestamp( true );
  $logProvider.debugEnabled(AuctionConfig.debug); // default is true
  growlProvider.globalTimeToLive({
    success: 4000,
    error: 10000,
    warning: 10000,
    info: 4000
  });
  growlProvider.globalPosition('top-center');
  growlProvider.onlyUniqueMessages(false);
}
