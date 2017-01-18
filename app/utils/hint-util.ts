import { Color } from "color";
import { TextField } from "ui/text-field";

declare var NSAttributedString: any;
declare var NSDictionary: any;
declare var NSForegroundColorAttributeName: any;

export function setHintColor(args: { view: TextField, color: Color }) {
  if (args.view.android) {
    args.view.android.setHintTextColor(args.color.android);
  }
  if (args.view.ios) {
    let dictionary = new NSDictionary(
      [args.color.ios],
      [NSForegroundColorAttributeName]
      );
    //resolves to a UITextField   then .attributedPlaceholder
    args.view.ios.attributedPlaceholder = NSAttributedString.alloc().initWithStringAttributes(
      args.view.hint, dictionary);
  } 
}
// Above, args.color.ios resolves to a UIColor, and args.view.ios resolves to a UITextField. 
// Once we have a reference to these controls we can set native properties on them directly in TypeScript, which this code does with the UITextField’s attributedPlaceholder property.