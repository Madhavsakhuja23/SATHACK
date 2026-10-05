import SwiftUI

enum SafetyCategory: String, CaseIterable, Identifiable {
    case before = "Before"
    case during = "During"
    case after = "After"

    var id: String { rawValue }
}

struct SafetyStep: Identifiable {
    let id = UUID()
    let category: SafetyCategory
//    let imageName: String
    let text: String
}
